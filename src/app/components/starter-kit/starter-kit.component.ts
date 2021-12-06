import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-starter-kit',
    template: `
        <article class="text-center mb-8">
            <h2 class="text-4xl font-semibold">
                <strong class="text-red-700">Ng</strong> Starter Kit
            </h2>
            <small class="inline-block border-1 bg-red-600 text-white px-2"
                ><strong>Angular</strong> with <strong>Supabase</strong> and all the
                <em>bells</em> and <em>whistles</em>.</small
            >
        </article>
    `,
})
export class StarterKitComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
