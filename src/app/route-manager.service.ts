import { Injectable } from '@angular/core';
import {TeilerService} from "./teiler/teiler.service";
import {EmbeddedTeilerApps, TeilerApp} from "./teiler/teiler-app";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {QualityReportComponent} from "./quality-report/quality-report.component";
import {Route, Router} from "@angular/router";
import {TeilerMainMenuComponent} from "./teiler-main-menu/teiler-main-menu.component";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

@Injectable({
  providedIn: 'root'
})
export class RouteManagerService {

  embeddedTeilerAppNameComponentMap = new Map<string, any>([
    {name: EmbeddedTeilerApps.CONFIGURATION, component: ConfigurationComponent},
    {name: EmbeddedTeilerApps.QUALITY_REPORT, component: QualityReportComponent}
  ].map(teilerAppComponent => [teilerAppComponent.name, teilerAppComponent.component]));

  constructor(teilerService:TeilerService, private route: Router) {
    teilerService.followTeilerApps().subscribe(teilerApps => this.route.resetConfig(this.fetchRoutes(teilerApps)));
  }

  private fetchRoutes(teilerApps: TeilerApp[]) {

    console.log("adding routes "+ teilerApps.length);
    let routes: Route[] = [];
    RouteManagerService.addFirstRoutes(routes);
    teilerApps.filter(teilerApp => teilerApp.activated && !teilerApp.externLink).forEach(teilerApp => {
      if (this.embeddedTeilerAppNameComponentMap.has(teilerApp.name)) {
        routes.push({path: teilerApp.routerLink, component: this.embeddedTeilerAppNameComponentMap.get(teilerApp.name)})
      }
      /*
      else {
        if (teilerApp.roles.includes(TeilerRoles.TEILER_PUBLIC)) {
          routes.push({path: teilerApp.routerLink, component: OrchestratorComponent});
        } else {
          routes.push({path: teilerApp.routerLink, component: OrchestratorComponent, canActivate: [AuthGuard]});
        }
      }*/

    })
    RouteManagerService.addFinalRoutes(routes);

    return routes;

  }

  private static addFirstRoutes(routes: Route[]) {
    routes.push({path: '', component: TeilerMainMenuComponent});
    //routes.push({path: 'login', component: TeilerMainMenuComponent, canActivate: [AuthGuard]});
    //routes.push({path: 'logout', component: TeilerMainMenuComponent});
  }

  private static addFinalRoutes(routes: Route[]) {
    routes.push({path: '**', component: EmptyRouteComponent});
  }

  public static fetchBasicRoutes() {
    let routes: Route[] = [];

    this.addFirstRoutes(routes);
    this.addFinalRoutes(routes);

    return routes;
  }


}
