import { Component } from '@angular/core';
import { AlertService } from '../alert.service'
import { Alert } from '../alert'
import { ALERT_EXIT_IN } from '../alert/alert.config'

@Component({
  selector: 'lib-alert-list',
  template: `
    <div class="alerts flex flex-col gap-2 absolute top-4 right-6">
        <lib-alert *ngFor="let alert of alerts" [alert]="alert" (close)="closeAlert"></lib-alert>
    </div>
  `,
})
export class AlertListComponent {
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) {
        this.alertService.alerts.subscribe((alert: Alert) => this.addAlert(alert));
    }

    private addAlert(alert: Alert) {
        this.alerts.push(alert);
        setTimeout(() => {
            this.closeAlert(alert)
        }, ALERT_EXIT_IN);
    }

    closeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(currAlert => currAlert.id !== alert.id);
    }
}
