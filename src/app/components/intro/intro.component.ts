import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <div class="min-h-screen flex flex-col justify-center">
        <lib-starter-kit></lib-starter-kit>
        <p class="text-center">Angular with components like alert/toast, button, separator, modal/dialog, spinner, etc. For Supabase integration as a plugin, and full-stack authentication support checkout the <strong>main</strong> branch</p>
        <div class="my-4"></div>
        <div class="text-center">
            <!-- <a class="btn btn-primary btn-outline" routerLink="/gallery">Browse Components</a>&nbsp; -->
            <a class="btn btn-primary" routerLink="/auth">See Supabase in action &rarr;</a>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class IntroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
