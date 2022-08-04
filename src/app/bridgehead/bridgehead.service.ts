import {Injectable} from '@angular/core';
import {QualityReportService} from "./quality-report.service";
import {NngmService} from "./nngm.service";
import {ConfigurationService} from "./configuration.service";
import {BridgheadElement} from "./bridghead-element";

@Injectable()
export class BridgeheadService {

  services: BridgheadElement[] = [];

  constructor(
    qualityReportService: QualityReportService,
    nngmService: NngmService,
    configurationService: ConfigurationService
  ) {

    let tempServices: BridgheadElement[] = [qualityReportService, nngmService, configurationService];
    for (let i = 0; i < tempServices.length; i++) {
      if (tempServices[i].backendUrl != null) {
        this.services.push(tempServices[i]);
      }
    }

  }


}
