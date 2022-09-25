import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationService} from "./configuration.service";
import {QualityReportService} from "./quality-report.service";
import {TeilerService} from "./teiler.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [ConfigurationService, QualityReportService, TeilerService]
})
export class TeilerModule {
}
