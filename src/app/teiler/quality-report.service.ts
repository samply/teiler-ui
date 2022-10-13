import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QualityReportService extends EmbeddedTeilerApp {

  description: string = "Generate and download quality reports";
  iconClass: string = "bi bi-file-earmark-excel-fill";
  iconSourceUrl: string | undefined = undefined;
  title: string = "Quality Report";
  roles: TeilerRole[] = [TeilerRole.TEILER_ADMIN];

  constructor(router: Router) {
    super(EmbeddedTeilerApps.QUALITY_REPORT, router);
  }

}
