import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AlertService } from 'commons'
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-auth',
  template: `
    <div class="min-h-screen flex justify-center">
        <div class="w-full sm:w-3/4 md:w-8/12 lg:w-6/12 xl:w-4/12 mt-28">
            <lib-starter-kit></lib-starter-kit>
            <div class="my-4"></div>
            <app-auth-form (change)="handleChange($event)" (submit)="handleSubmit($event)" [loading]="loading"></app-auth-form>
            <div class="my-4"></div>
            <div class="w-full flex justify-center py-6">
                <lib-spinner *ngIf="loading"></lib-spinner>
            </div>
        </div>
    </div>
  `,
})
export class AuthComponent {

    isSignIn = true
    loading = false

    constructor(private authService:AuthService, private alertService: AlertService, private router: Router) {}

    /**
     *
     * @param isSignIn boolean Are we seeing the signIn view of the form?
     */
    handleChange(isSignIn: boolean) {
        if (typeof isSignIn === 'boolean') this.isSignIn = isSignIn
    }

    /**
     *
     * @param creds User credentials - {email: string, password: string}
     * @returns
     */
    async handleSubmit(creds: any) {
        try {
            this.loading = true
            const { user } = await (this.isSignIn ? this.authService.signIn(creds) : this.authService.signUp(creds))
            if (user) {
                if(this.isSignIn) {
                    this.alertService.alert({ type: 'success', 'text': 'logging you in...' })
                    return this.router.navigateByUrl('/profile')
                } else {
                    this.alertService.alert({ type: 'success', 'text': 'please check your inbox to activate your account!' })
                }
            }
        } catch(error) {
            // @ts-ignore
            return this.alertService.alert({ type: 'error', 'text': error.message })
        } finally {
            this.loading = false
        }
    }
}
