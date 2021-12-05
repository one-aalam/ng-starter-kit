import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '@app/modules/auth'
import { User } from '@supabase/supabase-js'

@Component({
  selector: 'app-header',
  template: `
    <nav class="w-full py-3 bg-blue-50 shadow-md ">
        <div class="container flex justify-end place-content-end">
            <ul class="list-none flex gap-4 text-center">
                <li *ngIf="user">
                    {{ user.email }}
                    <lib-button [size]="'sm'" (click)="handleSignOut()">Sign Out</lib-button>
                </li>
                <li *ngElse>Anon</li>
            </ul>
        </div>
    </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
    user: User | null;
  constructor(private authService: AuthService, private router: Router) {
      this.user = this.authService.user
   }

  ngOnInit(): void {
  }

  async handleSignOut() {
      await this.authService.signOut()
      this.router.navigateByUrl('/auth')
  }

}
