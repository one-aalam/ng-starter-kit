import { Injectable } from '@angular/core';
import { SupabaseClient, User } from '@supabase/supabase-js';
import { SupabaseService } from '@modules/supabase'
import { Profile } from './profile.types'

const GET_COL_SET = `username, website, avatar_url`

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    user: User | null
    client: SupabaseClient
    constructor(private supabase: SupabaseService ) {
        this.user = this.supabase.user
        this.client = this.supabase.getClient()
    }

    get profile() {
      return this.client
        .from<Profile>('profiles')
        .select(GET_COL_SET)
        .eq('id', this.user?.id)
        .single();
    }

    updateProfile(profile: Partial<Profile>) {
      const update = {
        ...profile,
        id: this.user?.id,
        updated_at: new Date()
      }

      return this.client.from('profiles').upsert(update, {
        returning: 'minimal', // Don't return the value after inserting
      });
    }

    downLoadImage(path: string) {
      return this.client.storage.from('avatars').download(path);
    }

    async getAvatar(url: string) {
        const { data, error: downloadError } = await this.client.storage.from('avatars').download(url)
        if (downloadError) { throw downloadError }
        return URL.createObjectURL(data)
    }


    uploadAvatar(filePath: string, file: File) {
      return this.client.storage.from('avatars').upload(filePath, file);
    }


    generateAvatarFilename(file: File): string {
        const fileExt = file.name.split('.').pop()
        return `${this.user?.id}${Math.random()}.${fileExt}`
    }
}
