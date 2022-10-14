import {Injectable} from '@angular/core';
import {TeilerService} from "../teiler/teiler.service";
import {EmbeddedTeilerApps, TeilerApp, TeilerRole} from "../teiler/teiler-app";
import {ConfigurationComponent} from "../embedded/configuration/configuration.component";
import {QualityReportComponent} from "../embedded/quality-report/quality-report.component";
import {Route, Router} from "@angular/router";
import {TeilerMainMenuComponent} from "../teiler-main-menu/teiler-main-menu.component";
import {EmptyRouteComponent} from "../empty-route/empty-route.component";
import {
  TeilerAppPluginOrchestratorComponent
} from "../teiler-app-plugin-orchestrator/teiler-app-plugin-orchestrator.component";
import {AuthGuard} from "../security/guard/auth.guard";
import {FunctionTestsComponent} from "../embedded/function-tests/function-tests.component";
import {EventLogComponent} from "../embedded/event-log/event-log.component";
import {
  BASE_LOGIN_ROUTER_LINK, BASE_LOGOUT_ROUTER_LINK,
  BASE_MAIN_ROUTER_LINK,
  createLoginRouterLink,
  createLogoutRouterLink,
  createMainRouterLink
} from "./route-utils";

@Injectable({
  providedIn: 'root'
})
export class RouteManagerService {

  public mainRouterLink: string = BASE_MAIN_ROUTER_LINK;
  public loginRouterLink: string = BASE_LOGIN_ROUTER_LINK;
  public logoutRouterLink: string = BASE_LOGOUT_ROUTER_LINK;

  embeddedTeilerAppNameComponentMap = new Map<string, any>([
    {name: EmbeddedTeilerApps.CONFIGURATION, component: ConfigurationComponent},
    {name: EmbeddedTeilerApps.QUALITY_REPORT, component: QualityReportComponent},
    {name: EmbeddedTeilerApps.FUNCTION_TESTS, component: FunctionTestsComponent},
    {name: EmbeddedTeilerApps.EVENT_LOG, component: EventLogComponent}
  ].map(teilerAppComponent => [teilerAppComponent.name, teilerAppComponent.component]));

  constructor(teilerService: TeilerService, private router: Router) {
    teilerService.followTeilerApps().subscribe(teilerApps => {
      this.router.resetConfig(this.fetchRoutes(teilerApps));

      this.mainRouterLink = createMainRouterLink(this.router);
      this.loginRouterLink = createLoginRouterLink(this.router);
      this.logoutRouterLink = createLogoutRouterLink(this.router);
    });
  }

  getTeilerAppsNames(teilerApps: TeilerApp[]): string[] {
    let teilerAppsNames: string[] = [];
    teilerApps.forEach(teilerApp => teilerAppsNames.push(teilerApp.name));
    return teilerAppsNames;
  }

  private fetchRoutes(teilerApps: TeilerApp[]) {
    let routes: Route[] = [];
    RouteManagerService.addFirstRoutes(routes, this.router);
    teilerApps.filter(teilerApp => teilerApp.activated && !teilerApp.externLink).forEach(teilerApp => this.addTeilerAppToRoutes(teilerApp, routes));
    RouteManagerService.addFinalRoutes(routes, this.router);

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

  private static addFirstRoutes(routes: Route[], router?: Router) {
    routes.push({path: createMainRouterLink(router), component: TeilerMainMenuComponent});
    routes.push({
      path: createLoginRouterLink(router),
      component: TeilerMainMenuComponent,
      canActivate: [AuthGuard]
    });
    routes.push({path: createLogoutRouterLink(router), component: TeilerMainMenuComponent});
  }


  private static addFinalRoutes(routes: Route[], router?: Router) {
    routes.push({path: '**', redirectTo: createMainRouterLink(router) });
  }

  public static fetchBasicRoutes() {
    let routes: Route[] = [];

    this.addFirstRoutes(routes);
    this.addFinalRoutes(routes);

    return routes;
  }

}
