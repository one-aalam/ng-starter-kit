import { Injectable } from '@angular/core';
import { SupabaseClient, User, Session, UserCredentials, AuthChangeEvent } from '@supabase/supabase-js';
import { SupabaseService } from '@modules/supabase'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user: User | null
    client: SupabaseClient
    constructor(private supabase: SupabaseService ) {
        this.client = this.supabase.getClient()
        this.user = this.client.auth.user()
    }

    authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
        return this.client.auth.onAuthStateChange(callback);
      }

      signIn(creds: UserCredentials) {
        return this.client.auth.signIn(creds);
      }

      signUp(creds: UserCredentials) {
          return this.client.auth.signUp(creds);
      }

      signInWithGithub() {
          return this.client.auth.signIn({ provider: 'github'})
      }

      signOut() {
        return this.client.auth.signOut();
      }

}
