import {Component, OnInit} from '@angular/core';
import {BridgeheadService} from "../bridgehead/bridgehead.service";
import {BridgheadElement, ImageSrcType} from "../bridgehead/bridghead-element";

@Component({
  selector: 'app-bridgehead-main-menu',
  templateUrl: './bridgehead-main-menu.component.html',
  styleUrls: ['./bridgehead-main-menu.component.css']
})
export class BridgeheadMainMenuComponent implements OnInit {

  bridgeheadServices;

  constructor(
    bridgeheadServices: BridgeheadService
  ) {
    this.bridgeheadServices = bridgeheadServices;
  }

  ngOnInit(): void {
  }

  isBridgheadServiceImageAsset(bridgeheadElement: BridgheadElement){
    return bridgeheadElement.imageSrcType == ImageSrcType.ASSET;
  }

  isBridgheadServiceImageBootstrap(bridgeheadElement: BridgheadElement){
    return bridgeheadElement.imageSrcType == ImageSrcType.BOOTSTRAP;
  }

}
