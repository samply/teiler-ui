import { Injectable } from '@angular/core';
import {BridgheadElement, ImageSrcType} from "./bridghead-element";

@Injectable({
  providedIn: 'root'
})
export class QualityReportService implements BridgheadElement{

  constructor() { }

  backendUrl:string = "http://quality-report:8080";
  description:string = "Generate a Quality Report";
  imagesrc:string = "bi bi-file-earmark-excel-fill";
  imageSrcType: ImageSrcType = ImageSrcType.BOOTSTRAP;
  titel:string = "Quality Report";
  route: string = "quality-report";

}
