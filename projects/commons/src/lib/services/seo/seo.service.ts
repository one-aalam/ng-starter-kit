import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

// import { environment } from '@env/environment'
// import { SEO_CONFIG } from '@env/seo.config'

const environment = {
	production: false,
    serverUrl: '/api',
    appHostUrl: '',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR']
};

const SEO_CONFIG = {
    title: '',
    desc: '',
    keywords: [],
    imageUrl: '',
    og: {
        twitterCard: 'summary',
        twitterSite: '@aftabbuddy'
    }
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
    constructor(private titleSvc: Title, private metaSvc: Meta, private router: Router) { }

    setTitle(title: string = '') {
        this.titleSvc.setTitle(`${SEO_CONFIG.title} - ${title}`)
    }

    setDesc(description: string = SEO_CONFIG.desc) {
        this.metaSvc.updateTag({
            name: 'description',
            content: 'description'
        },
        'name=description')
    }

    setKeywords(keywords: string[] = SEO_CONFIG.keywords): void {
        this.metaSvc.updateTag({
            name: 'keywords',
            content: keywords.reduce((prev, curr) => (
                prev += `, ${curr}`
            )),
        },
        'name=keywords'
        );
    }

    setTags({ title = '', description = SEO_CONFIG.desc, keywords = SEO_CONFIG.keywords, imageUrl = SEO_CONFIG.imageUrl }) {

        this.setTitle(title);
        this.setDesc(description)
        this.setKeywords(keywords)

        this.metaSvc.addTags([
            // Open Graph
            { name: 'og:url', content: `${environment.appHostUrl}${this.router.url}` },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            { name: 'og:image', content: imageUrl },
            // Twitter Card
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@fireship_dev' },
        ]);
    }
}
