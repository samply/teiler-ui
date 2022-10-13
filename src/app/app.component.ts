import { Component } from '@angular/core';
import {RouteManagerService} from "./route-manager.service";
import {TeilerAuthService} from "./security/teiler-auth.service";
import {from} from "rxjs";


@Component({
  selector: 'teiler-ui',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'teiler-ui';
  isLoggedIn: boolean = false;
  user: string = '';


  constructor(public routeManagerService: RouteManagerService, public authService: TeilerAuthService) {
    from(authService.isLoggedId()).subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    from(authService.loadUserProfile()).subscribe(keycloakProfile => this.user = keycloakProfile.firstName + ' '+ keycloakProfile.lastName);
  }
}
