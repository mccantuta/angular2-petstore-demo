import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet Store Angular 2 Demo';
  userLogged = false;

  constructor (private authenticationService: AuthenticationService) {}
  
  ngOnInit() {
    this.authenticationService.authenticated.subscribe(latestStatus => {
      this.userLogged = latestStatus;
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}