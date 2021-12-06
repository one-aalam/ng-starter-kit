import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable, of as obervableOf } from 'rxjs';
import { SupabaseService } from '@app/modules/supabase';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private supabase: SupabaseService, private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const session = this.supabase.session;
        if (session) {
            // @ts-ignore
            const { roles } = session.user?.user_metadata;
            // do something with user roles (redirection?)
            return true;
        }
        this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
        return this.supabase.session ? obervableOf(true) : obervableOf(false);
    }
}
