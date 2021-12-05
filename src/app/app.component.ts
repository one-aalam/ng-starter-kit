import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoggerService, AlertService } from 'commons'
import { SupabaseService } from '@app/modules/supabase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-starter-kit';
  faCoffee = faCoffee;
  session = this.supabase.session;

  constructor(private loggerService: LoggerService, private alertService: AlertService, private readonly supabase: SupabaseService) {
    this.loggerService.info('Initilaized Ng Starter Kit')
  }

  ngOnInit() {
    this.supabase.authChanges((event, session) => {
        this.session = session
    });
  }

}
