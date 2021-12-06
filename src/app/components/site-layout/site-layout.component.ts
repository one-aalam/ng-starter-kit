import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-site-layout',
    template: `
        <div class="container mx-auto">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [],
})
export class SiteLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
