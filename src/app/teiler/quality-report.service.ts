import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps} from "./teiler-app";

@Injectable({
  providedIn: 'root'
})
export class QualityReportService extends EmbeddedTeilerApp {

  description: string = "Generate a Quality Report";
  iconClass: string = "bi bi-file-earmark-excel-fill";
  iconSourceUrl: string | undefined = undefined;
  title: string = "Quality Report";

  constructor() {
    super(EmbeddedTeilerApps.QUALITY_REPORT);
  }

}
