import { Component } from '@angular/core';
import {RouteManagerService} from "./route-manager.service";


@Component({
  selector: 'teiler-ui',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teiler-ui';


  constructor(routeManagerService: RouteManagerService) {
  }
}
