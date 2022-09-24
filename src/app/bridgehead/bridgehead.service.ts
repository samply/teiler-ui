import {Injectable} from '@angular/core';
import {QualityReportService} from "./quality-report.service";
import {ConfigurationService} from "./configuration.service";
import {BridgheadElement} from "./bridghead-element";

@Injectable()
export class BridgeheadService {

  services: BridgheadElement[] = [];

  constructor(
    qualityReportService: QualityReportService,
    configurationService: ConfigurationService
  ) {

    let tempServices: BridgheadElement[] = [qualityReportService, configurationService];
    for (let i = 0; i < tempServices.length; i++) {
      if (tempServices[i].backendUrl != null) {
        this.services.push(tempServices[i]);
      }
    }

  }


}
