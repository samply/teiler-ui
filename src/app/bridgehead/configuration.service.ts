import {Injectable} from '@angular/core';
import {BridgheadElement, ImageSrcType} from "./bridghead-element";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService implements BridgheadElement{

  constructor() { }

  backendUrl: string = "http://teiler-core:8080";
  description: string = "Configure teiler services";
  imagesrc: string = "bi bi-gear-wide";
  imageSrcType: ImageSrcType = ImageSrcType.BOOTSTRAP;
  titel: string = "Teiler Configuration";
  route: string = "config";


}
