import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-layout',
    template: `
        <app-header></app-header>
        <div class="container mx-auto">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [],
})
export class AppLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
