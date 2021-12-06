import { Component, OnInit } from '@angular/core';
import { AlertService } from 'commons';
import { DialogService } from '@ngneat/dialog';

import type { Profile } from '../../profile.types';
import { ProfileService } from '../../profile.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
    selector: 'app-profile',
    template: `
        <div class="py-2 flex flex-col place-items-center">
            <em *ngIf="loading">loading profile details...</em>
            <div v-else>
                <div class="mt-2 text-center">
                    <lib-avatar
                        [src]="profile?.avatar_url || '' | safe: 'url'"
                        [title]="profile?.username || ''"
                        [loading]="avatarLoading"
                        (change)="updateAvatar($event)"
                    ></lib-avatar>
                    {{ avatarLoading ? 'Updating..' : '(click to update)' }}
                </div>
                <div class="profile-detail my-4 flex flex-col place-items-center">
                    <h2 class="text-4xl mb-1">Howdie, {{ profile?.username }}!</h2>
                    <span class="inline-block px-2 py-1 bg-gray-400 text-white rounded-full">{{
                        profile?.website
                    }}</span>
                    <button class="text-gray-500 text-sm my-1" (click)="open()">
                        (update profile)
                    </button>
                </div>
            </div>
        </div>
    `,
})
export class ProfileComponent implements OnInit {
    profile: Profile = {
        username: '',
        website: '',
        avatar_url: '',
    };
    loading = false;
    avatarLoading = false;
    isProfileUpdating = false;

    constructor(
        private profileService: ProfileService,
        private alertService: AlertService,
        private dialog: DialogService,
    ) {}

    ngOnInit(): void {
        this.getProfile();
    }

    open() {
        const { avatar_url, ...editableProfileDetails } = this.profile;
        const dialogRef = this.dialog.open(EditProfileComponent, {
            data: {
                ...editableProfileDetails,
                loading: false,
            },
        });
        // @ts-ignore
        dialogRef.beforeClose(async result => {
            if (result) {
                await this.updProfile(result);
            }
            return true;
        });
        dialogRef.afterClosed$.subscribe(result => {});
    }

    async getProfile() {
        try {
            this.loading = true;
            let { data: profile, error, status } = await this.profileService.profile;

            if (error && status !== 406) {
                throw error;
            }

            if (profile) {
                this.profile = profile;
                this.avatarLoading = true;
                this.profile.avatar_url = await this.profileService.getAvatar(
                    this.profile.avatar_url,
                );
                this.avatarLoading = false;
            }
        } catch (error) {
            // @ts-ignore
            this.alertService.alert({ type: 'error', text: error.message });
        } finally {
            this.loading = false;
        }
    }

    /**
     *
     * @param file File The file to upload
     * @returns
     */
    async updateCurrentUserAvatar(fileName: string, file: File): Promise<void> {
        let { error: uploadError } = await this.profileService.uploadAvatar(fileName, file);
        if (uploadError) {
            return this.alertService.alert({ type: 'error', text: uploadError.message });
        }
        await this.profileService.updateProfile({
            avatar_url: fileName,
        });
    }

    async updateAvatar(event: any) {
        const { target } = event;
        try {
            if (!target!.files || target.files.length == 0) {
                throw 'You must select an image to upload.';
            }
            const avatarFileName = this.profileService.generateAvatarFilename(target.files[0]);
            this.avatarLoading = true;
            await this.updateCurrentUserAvatar(avatarFileName, target.files[0]);
            this.profile.avatar_url = await this.profileService.getAvatar(avatarFileName);
        } catch (error) {
            // @ts-ignore
            this.alertService.alert({ type: 'error', text: error.message });
        } finally {
            this.avatarLoading = false;
        }
    }

    /**
     *
     * @param param { username, website }
     */
    async updProfile({ username, website }: Omit<Profile, 'avatar_url'>): Promise<void> {
        try {
            this.isProfileUpdating = true;
            // @ts-ignore
            let { error: updateError } = await this.profileService.updateProfile({
                username,
                website,
            });
            if (updateError) {
                throw updateError;
            }
            this.profile.username = username;
            this.profile.website = website;
        } catch (error) {
            // @ts-ignore
            this.alertService.alert({ type: 'error', text: error?.message });
        } finally {
            this.isProfileUpdating = false;
        }
    }
}
