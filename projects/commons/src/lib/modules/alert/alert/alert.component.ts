import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

import { faCheckCircle, faInfoCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Alert } from '../alert'
import { ALERT_CLS_CONFIG, ALERT_ANIM_DELAY } from './alert.config'

@Component({
  selector: 'lib-alert',
  template: `
    <div class="alert" [@flyInOut]="alert"
        [class.alert--default]="alert.type === 'default' || !alert.type"
        [class.alert--success]="alert.type === 'success'"
        [class.alert--error]="alert.type === 'error'"
        [ngClass]="getAlertCls(alert)"
        >
        <div class="alert__content">
            <fa-icon *ngIf="alert.type === 'default'" class="w-6 inline-block" [icon]="default"></fa-icon>
            <fa-icon *ngIf="alert.type === 'success'"  class="w-6 inline-block" [icon]="success"></fa-icon>
            <fa-icon *ngIf="alert.type === 'error'"  class="w-6 inline-block" [icon]="error"></fa-icon>
            <p class="message">{{alert.text}}</p>
            <button class="alert__action-close" (click)="handleClose(alert)"><fa-icon class="w-6 inline-block" [icon]="dismiss"></fa-icon>
</button>
        </div>
    </div>
  `,
  styles: [
      `
        .alert {
            @apply block shadow-md rounded px-3 py-2 transition-all mt-2 bg-gray-100 text-gray-800;
        }
        .alert__content {
            @apply flex gap-2;
        }
        .alert__content p {
            @apply max-w-xs break-words text-base;
        }
        .alert--success {
            @apply bg-green-300 text-gray-800;
        }
        .alert--error {
            @apply bg-red-500 text-white;
        }
        .alert__action-close {
            @apply inline-grid place-content-center rounded-full w-5 h-5 border-0 m-0 p-0 transition-colors;
        }
        .alert__action-close:hover {
            @apply text-gray-200 bg-gray-500;
        }
        .alert--success .alert__action-close {
            @apply text-gray-400 bg-green-200;
        }
        .alert--success .alert__action-close:hover {
            @apply bg-green-700 text-white;
        }
        .alert--error .alert__action-close {
            @apply text-gray-300 bg-red-600;
        }
        .alert--error .alert__action-close:hover {
            @apply text-red-600 bg-red-300;
        }
      `
  ],
    animations: [
        trigger('flyInOut', [
            state('in', style({
                transform: 'translateY(0)'
            })),
            state('out', style({
                transform: 'translateY(0)'
            })),
            transition('void => *', [
                style({
                    transform: 'translateY(-100%)'
                }),
                animate(ALERT_ANIM_DELAY)
            ]),
            transition('* => void', [
                animate(ALERT_ANIM_DELAY, style({
                    transform: 'translateY(-200%)'
                }))
            ])
        ])
    ],
})
export class AlertComponent {
    default = faInfoCircle;
    success = faCheckCircle;
    error = faExclamationCircle;
    dismiss = faTimesCircle;
    // @ts-ignore
    @Input() alert: Alert;
    @Output() close: EventEmitter<Alert> = new EventEmitter()

    getAlertCls(alert: Alert): string {
        return ALERT_CLS_CONFIG[alert.type] ? ALERT_CLS_CONFIG[alert.type] : ALERT_CLS_CONFIG.default;
    }

    handleClose(alert: Alert) {
        this.close.emit(alert)
    }
}
