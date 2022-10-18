import {Component, OnInit} from '@angular/core';
import {TeilerService} from "../teiler/teiler.service";
import {createMainRouterLink} from "../route/route-utils";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public teilerService: TeilerService) {
  }

  ngOnInit(): void {
  }

  isMainSite() {
    let mainRouterLink = createMainRouterLink();
    return window.location.pathname === '/' + mainRouterLink;
  }

}
