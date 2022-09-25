import {Injectable} from '@angular/core';
import {QualityReportService} from "./quality-report.service";
import {ConfigurationService} from "./configuration.service";
import {TeilerApp} from "./teiler-app";

@Injectable()
export class TeilerService {

  teilerApps: TeilerApp[] = [];

  constructor(
    qualityReportService: QualityReportService,
    configurationService: ConfigurationService
  ) {

    let tempApps: TeilerApp[] = [qualityReportService, configurationService];
    for (let i = 0; i < tempApps.length; i++) {
        this.teilerApps.push(tempApps[i]);
    }

  }


}
