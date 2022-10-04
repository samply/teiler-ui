import {Component, OnInit} from '@angular/core';
import {TeilerService} from "../teiler/teiler.service";


@Component({
  selector: 'teiler-main-menu',
  templateUrl: './teiler-main-menu.component.html',
  styleUrls: ['./teiler-main-menu.component.css']
})
export class TeilerMainMenuComponent implements OnInit {


  constructor(public teilerService: TeilerService) {
  }

  ngOnInit(): void {
  }

  existLocalAndCentralTeilerAppsAtTheSameTime() {
    if (this.teilerService.teilerApps.length > 0) {
      let isLocal = this.teilerService.teilerApps[0].local;
      for (let teilerApp of this.teilerService.teilerApps) {
        if (teilerApp.local != isLocal) {
          return true;
        }
      }
    }
    return false;
  }

}
