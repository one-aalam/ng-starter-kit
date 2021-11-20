import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoggerService } from 'commons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-starter-kit';
  faCoffee = faCoffee;
  constructor(private loggerService: LoggerService) {
    this.loggerService.info('Info')
  }
}
