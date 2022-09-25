import {Component, OnInit} from '@angular/core';
import {TeilerApp} from "../teiler/teiler-app";
import {TeilerService} from "../teiler/teiler.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  teilerApps: TeilerApp[];

  constructor(public teilerService: TeilerService) {
    this.teilerApps = teilerService.teilerApps;
  }

  ngOnInit(): void {
  }

  isMainSite() {
    return window.location.pathname == '/';
  }

}
