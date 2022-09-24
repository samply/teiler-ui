import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BridgeheadMainMenuComponent} from "./bridgehead-main-menu/bridgehead-main-menu.component";
import {QualityReportComponent} from "./quality-report/quality-report.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {BridgeheadModule} from "./bridgehead/bridgehead.module";

export const routingComponents = [
  BridgeheadMainMenuComponent,
  QualityReportComponent,
  ConfigurationComponent
]

const routes: Routes = [
  {path: '', component: BridgeheadMainMenuComponent},
  {path: 'quality-report', component: QualityReportComponent},
  {path: 'config', component: ConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BridgeheadModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
