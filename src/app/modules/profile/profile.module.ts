import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonsModule } from 'commons';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
    declarations: [ProfileComponent, EditProfileComponent],
    imports: [CommonModule, ReactiveFormsModule, ProfileRoutingModule, CommonsModule],
})
export class ProfileModule {}
