import {Component, OnInit} from '@angular/core';
import {TeilerApp} from "../teiler/teiler-app";
import {TeilerService} from "../teiler/teiler.service";
import {Router} from "@angular/router";
import {createMainRouterLink} from "../route/route-utils";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public teilerService: TeilerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  isMainSite() {
    let mainRouterLink = createMainRouterLink(this.router);
    return window.location.pathname === '/' + mainRouterLink;
  }

}
