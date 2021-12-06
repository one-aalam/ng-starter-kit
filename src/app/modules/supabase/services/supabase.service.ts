import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '@env/environment';
import { SupabaseQueryBuilder } from '@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder';
import { StorageFileApi } from '@supabase/storage-js/dist/main/lib';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private client: SupabaseClient;

    constructor() {
        const { supabaseUrl, supabaseKey } = environment.supabaseClientConfig;
        this.client = createClient(supabaseUrl, supabaseKey);
    }

    get user() {
        return this.client.auth.user();
    }

    get session() {
        return this.client.auth.session();
    }

    from(table: 'profiles'): SupabaseQueryBuilder<any> {
        return this.client.from(table);
    }

    fromStorage(bucket: string): StorageFileApi {
        return this.client.storage.from(bucket);
    }

    getClient(): SupabaseClient {
        return this.client;
    }

    authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
        return this.client.auth.onAuthStateChange(callback);
    }
}
