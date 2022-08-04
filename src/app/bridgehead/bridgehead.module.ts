import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationService} from "./configuration.service";
import {QualityReportService} from "./quality-report.service";
import {NngmService} from "./nngm.service";
import {BridgeheadService} from "./bridgehead.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [ConfigurationService, QualityReportService, NngmService, BridgeheadService]
})
export class BridgeheadModule {
}
