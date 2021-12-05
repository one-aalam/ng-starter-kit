import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Alert } from '../alert'
import { ALERT_CLS_CONFIG, ALERT_ANIM_DELAY } from './alert.config'

@Component({
  selector: 'lib-alert',
  template: `
    <div class="shadow-md rounded px-3 py-2 text-shadow transition-all mt-2" [@flyInOut]="alert" [ngClass]="getAlertCls(alert)">
        <div>
            <button mat-icon-button
                (click)="handleClose(alert)"
                matTooltip="Close the notification"
                matTooltipPosition="before">X
            </button>
        </div>
        <div class="message">{{alert.text}}</div>
    </div>
  `,
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
    ]
})
export class AlertComponent {
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
