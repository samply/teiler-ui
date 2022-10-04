import {Injectable} from '@angular/core';
import {TeilerService} from "./teiler/teiler.service";
import {EmbeddedTeilerApps, TeilerApp, TeilerRole} from "./teiler/teiler-app";
import {ConfigurationComponent} from "./embedded/configuration/configuration.component";
import {QualityReportComponent} from "./embedded/quality-report/quality-report.component";
import {Route, Router} from "@angular/router";
import {TeilerMainMenuComponent} from "./teiler-main-menu/teiler-main-menu.component";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {
  TeilerAppPluginOrchestratorComponent
} from "./teiler-app-plugin-orchestrator/teiler-app-plugin-orchestrator.component";
import {AuthGuard} from "./security/guard/auth.guard";
import {FunctionTestsComponent} from "./embedded/function-tests/function-tests.component";

@Injectable({
  providedIn: 'root'
})
export class RouteManagerService {

  embeddedTeilerAppNameComponentMap = new Map<string, any>([
    {name: EmbeddedTeilerApps.CONFIGURATION, component: ConfigurationComponent},
    {name: EmbeddedTeilerApps.QUALITY_REPORT, component: QualityReportComponent},
    {name: EmbeddedTeilerApps.FUNCTION_TESTS, component: FunctionTestsComponent}
  ].map(teilerAppComponent => [teilerAppComponent.name, teilerAppComponent.component]));

  constructor(teilerService: TeilerService, private route: Router) {
    teilerService.followTeilerApps().subscribe(teilerApps => this.route.resetConfig(this.fetchRoutes(teilerApps)));
  }

  private fetchRoutes(teilerApps: TeilerApp[]) {

    console.log("adding routes " + teilerApps.length);
    let routes: Route[] = [];
    RouteManagerService.addFirstRoutes(routes);
    teilerApps.filter(teilerApp => teilerApp.activated && !teilerApp.externLink).forEach(teilerApp => this.addTeilerAppToRoutes(teilerApp, routes));
    RouteManagerService.addFinalRoutes(routes);

    return routes;

  }

  private addTeilerAppToRoutes(teilerApp: TeilerApp, routes: Route[]) {

    let route: Route = {path: teilerApp.routerLink}

    if (!teilerApp.roles.includes(TeilerRole.TEILER_PUBLIC)) {
      route.canActivate = [AuthGuard];
    }

    if (this.embeddedTeilerAppNameComponentMap.has(teilerApp.name)) {
      route.component = this.embeddedTeilerAppNameComponentMap.get(teilerApp.name);
    } else {
      route.component = TeilerAppPluginOrchestratorComponent;
    }

    routes.push(route);

  }

  private static addFirstRoutes(routes: Route[]) {
    routes.push({path: '', component: TeilerMainMenuComponent});
    routes.push({path: 'login', component: TeilerMainMenuComponent, canActivate: [AuthGuard]});
    routes.push({path: 'logout', component: TeilerMainMenuComponent});
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
