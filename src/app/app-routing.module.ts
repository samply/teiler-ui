import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeilerMainMenuComponent} from "./teiler-main-menu/teiler-main-menu.component";
import {QualityReportComponent} from "./quality-report/quality-report.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {TeilerModule} from "./teiler/teiler.module";
import {TeilerCoreClientService} from "./teiler-core-client.service";

export const routingComponents = [
  TeilerMainMenuComponent,
  QualityReportComponent,
  ConfigurationComponent
]

const routes: Routes = TeilerCoreClientService.fetchBasicRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes), TeilerModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
