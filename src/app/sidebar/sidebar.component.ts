import {Component, OnInit} from '@angular/core';
import {BridgheadElement} from "../bridgehead/bridghead-element";
import {BridgeheadService} from "../bridgehead/bridgehead.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  services: BridgheadElement[];

  constructor(bridgeheadService: BridgeheadService) {
    this.services = bridgeheadService.services;
  }

  ngOnInit(): void {
  }

  isMainSite() {
    return window.location.pathname == '/';
  }

}
