import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertComponent } from './alert/alert.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { AlertService } from './alert.service'

@NgModule({
  declarations: [
    AlertComponent,
    AlertListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  exports: [
    AlertComponent,
    AlertListComponent
  ],
  providers: [
    AlertService
  ]
})
export class AlertModule { }
