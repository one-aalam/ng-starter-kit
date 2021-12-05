import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
    BrowserAnimationsModule
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
