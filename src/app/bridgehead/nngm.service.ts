import { Injectable } from '@angular/core';
import {BridgheadElement, ImageSrcType} from "./bridghead-element";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NngmService implements BridgheadElement{

  constructor() { }

  backendUrl:string = environment.config.nngmUrl;
  description:string = "nNGM Configuration";
  imagesrc:string = "/assets/nngm.png";
  imageSrcType: ImageSrcType = ImageSrcType.ASSET;
  titel:string = "nNGM";
  route: string = "nngm";

}
