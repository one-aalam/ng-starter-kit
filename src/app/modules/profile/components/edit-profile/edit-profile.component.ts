import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import type { Profile } from '../../profile.types';

type EditableProfileProps = Omit<Profile, 'avatar_url'>;

@Component({
    selector: 'app-edit-profile',
    template: `
        <form class="form px-8 py-6" [formGroup]="profileForm" (ngSubmit)="handleSubmit($event)">
            <fieldset>
                <legend class="modal-header">
                    <h3 class="modal-header__title">Update Profile</h3>
                    <p class="modal-header__desc">Fill in the details and save</p>
                </legend>
                <div className="modal-content form-controls">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            name="username"
                            class="input input-bordered"
                            required
                            placeholder="Your username"
                            formControlName="username"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Website</span>
                        </label>
                        <input
                            type="text"
                            name="website"
                            class="input input-bordered"
                            placeholder="Your website"
                            formControlName="website"
                        />
                    </div>
                </div>
                <div class="modal-action">
                    <lib-button
                        type="submit"
                        variant="primary"
                        [disabled]="profileForm.invalid || loading"
                        [loading]="loading"
                        >Update Profile</lib-button
                    >
                    <button class="btn" (click)="ref.close()">Cancel</button>
                </div>
            </fieldset>
        </form>
    `,
    styles: [
        `
            .modal-header {
                @apply w-full pb-2 border-b mb-4 border-blue-200;
            }
            .modal-header__title {
                @apply text-2xl font-semibold text-blue-900;
            }
            .modal-header__desc {
                @apply text-xs text-gray-500;
            }
            .modal-content {
                @apply py-8 bg-green-50;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent {
    profileForm: FormGroup;
    loading: boolean = false;
    @Output() submit = new EventEmitter<EditableProfileProps>();

    constructor(private fb: FormBuilder, public ref: DialogRef) {
        this.profileForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            website: ['', [Validators.minLength(6)]],
        });
        const { loading, ...defaultValues } = ref.data;
        this.profileForm.setValue(defaultValues);
        this.loading = loading;
    }

    handleSubmit(e: Event) {
        const username = this.profileForm.value['username'];
        const website = this.profileForm.value['website'];
        this.loading = true;
        this.ref.close({ username, website });
    }
}
