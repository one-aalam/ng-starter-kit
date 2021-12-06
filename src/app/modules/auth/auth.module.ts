import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonsModule } from 'commons';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './components/auth/auth.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
    declarations: [AuthComponent, AuthFormComponent],
    imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, CommonsModule],
})
export class AuthModule {}
