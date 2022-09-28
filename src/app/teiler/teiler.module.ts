import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationService} from "./configuration.service";
import {QualityReportService} from "./quality-report.service";
import {TeilerService} from "./teiler.service";
import {TeilerConfigService} from "./teiler-config.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [ConfigurationService, QualityReportService, TeilerService, TeilerConfigService]
})
export class TeilerModule {
}
