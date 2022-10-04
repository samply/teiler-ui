import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigurationService} from "./configuration.service";
import {QualityReportService} from "./quality-report.service";
import {TeilerService} from "./teiler.service";
import {TeilerConfigService} from "./teiler-config.service";
import {FunctionTestsService} from "./function-tests.service";
import {EventLogService} from "./event-log.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [ConfigurationService, QualityReportService, FunctionTestsService, EventLogService, TeilerService, TeilerConfigService]
})
export class TeilerModule {
}
