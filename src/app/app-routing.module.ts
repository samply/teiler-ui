import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeilerMainMenuComponent} from "./teiler-main-menu/teiler-main-menu.component";
import {QualityReportComponent} from "./quality-report/quality-report.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {TeilerModule} from "./teiler/teiler.module";
import {RouteManagerService} from "./route-manager.service";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {APP_BASE_HREF} from "@angular/common";

export const routingComponents = [
  EmptyRouteComponent,
  TeilerMainMenuComponent,
  QualityReportComponent,
  ConfigurationComponent
]

const routes: Routes = RouteManagerService.fetchBasicRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes), TeilerModule],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppRoutingModule { }
