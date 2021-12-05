import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from '@ngneat/dialog';


import { AppRoutingModule } from './app-routing.module';
import { CommonsModule, LoggerService, AlertModule } from 'commons'

import { SupabaseModule } from '@app/modules/supabase/supabase.module'

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    AlertModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    DialogModule.forRoot({}),
    AppRoutingModule,
    SupabaseModule,
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
