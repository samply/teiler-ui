import { Component } from '@angular/core';
import {TeilerCoreClientService} from "./teiler-core-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teiler-ui';


  constructor(private teilerCoreClientService:TeilerCoreClientService) {
  }
}
