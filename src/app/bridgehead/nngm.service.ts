import { Injectable } from '@angular/core';
import {BridgheadElement, ImageSrcType} from "./bridghead-element";

@Injectable({
  providedIn: 'root'
})
export class NngmService implements BridgheadElement{

  constructor() { }

  backendUrl:string = "http://nngm:8080";
  description:string = "nNGM Configuration";
  imagesrc:string = "/assets/nngm.png";
  imageSrcType: ImageSrcType = ImageSrcType.ASSET;
  titel:string = "nNGM";
  route: string = "nngm";

}
