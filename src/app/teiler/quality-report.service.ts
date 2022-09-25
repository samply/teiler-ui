import {Injectable} from '@angular/core';
import {LocalTeilerApp} from "./teiler-app";

@Injectable({
  providedIn: 'root'
})
export class QualityReportService extends LocalTeilerApp {

  description: string = "Generate a Quality Report";
  iconClass: string = "bi bi-file-earmark-excel-fill";
  iconSourceUrl: string | undefined = undefined;
  name: string = "quality-report";
  routerLink: string = "quality-report";
  title: string = "Quality Report";

}
