import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeilerMainMenuComponent} from "../teiler-main-menu/teiler-main-menu.component";
import {QualityReportComponent} from "../embedded/quality-report/quality-report.component";
import {ConfigurationComponent} from "../embedded/configuration/configuration.component";
import {FunctionTestsComponent} from "../embedded/function-tests/function-tests.component";
import {TeilerModule} from "../teiler/teiler.module";
import {RouteManagerService} from "./route-manager.service";
import {EmptyRouteComponent} from "../empty-route/empty-route.component";
import {APP_BASE_HREF} from "@angular/common";
import {
  TeilerAppPluginOrchestratorComponent
} from "../teiler-app-plugin-orchestrator/teiler-app-plugin-orchestrator.component";
import {EventLogComponent} from "../embedded/event-log/event-log.component";
import {LanguageSelectorComponent} from "../language-selector/language-selector.component";
import {UploadsComponent} from "../embedded/uploads/uploads.component";
import {ActiveInquiriesComponent} from "../embedded/inquiries/active-inquiries.component";
import {ArchivedInquiriesComponent} from "../embedded/inquiries/archived-inquiries.component";
import {FailedInquiriesComponent} from "../embedded/inquiries/failed-inquiries.component";
import {InquiriesComponent} from "../embedded/inquiries/inquiries.component";
import {InquiryComponent} from "../embedded/inquiries/inquiry/inquiry.component";
import {MyTestComponent} from "../embedded/my-test/my-test.component";



export const routingComponents = [
  EmptyRouteComponent,
  TeilerMainMenuComponent,
  QualityReportComponent,
  FunctionTestsComponent,
  ConfigurationComponent,
  EventLogComponent,
  UploadsComponent,
  ActiveInquiriesComponent,
  ArchivedInquiriesComponent,
  FailedInquiriesComponent,
  InquiriesComponent,
  InquiryComponent,
  LanguageSelectorComponent,
  TeilerAppPluginOrchestratorComponent,
  MyTestComponent
]

const routes: Routes = RouteManagerService.fetchBasicRoutes();

// Prod: imports: [RouterModule.forRoot(routes), TeilerModule],
// Test: imports: [RouterModule.forRoot(routes, { enableTracing: true }), TeilerModule],
@NgModule({
  imports: [RouterModule.forRoot(routes), TeilerModule],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})

export class AppRoutingModule {
}
