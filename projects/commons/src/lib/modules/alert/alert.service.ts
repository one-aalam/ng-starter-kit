import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Alert } from "./alert";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    private subject = new Subject<Alert>();
    private idx = 0;

    constructor() { }

    get alerts(): Observable<Alert> {
        return this.subject;
    }

    alert(alert: Alert) {
        this.subject.next({...alert, id: this.idx++});
    }
}
