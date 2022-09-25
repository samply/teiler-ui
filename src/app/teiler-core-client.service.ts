import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";
import {EmbeddedTeilerApps, TeilerApp, TeilerRoles} from "./teiler/teiler-app";
import {Observable} from "rxjs";
import {TeilerMainMenuComponent} from "./teiler-main-menu/teiler-main-menu.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {QualityReportComponent} from "./quality-report/quality-report.component";

@Injectable({
  providedIn: 'root'
})
export class TeilerCoreClientService {

  teilerCoreUrl: string = "http://localhost:8085/apps/de";
  embeddedTeilerAppNameComponentMap = new Map<string, any>([
    {name: EmbeddedTeilerApps.CONFIGURATION, component: ConfigurationComponent},
    {name: EmbeddedTeilerApps.QUALITY_REPORT, component: QualityReportComponent}
  ].map(teilerAppComponent => [teilerAppComponent.name, teilerAppComponent.component]));

  constructor(private httpClient: HttpClient, private route: Router) {
    this.generateRoutes();
  }

  public fetchTeilerApps(): Observable<TeilerApp[]> {
    return this.httpClient.get<TeilerApp[]>(this.teilerCoreUrl);
  }

  private generateRoutes() {
    this.fetchTeilerApps().subscribe((data: TeilerApp[]) => {
      this.route.resetConfig(this.fetchRoutes(data))
    });
  }

  private fetchRoutes(teilerApps: TeilerApp[]) {

    console.log("adding routes");
    let routes: Route[] = [];
    TeilerCoreClientService.addFirstRoutes(routes);
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
    TeilerCoreClientService.addFinalRoutes(routes);

    return routes;

  }

  private static addFirstRoutes(routes: Route[]) {
    routes.push({path: '', component: TeilerMainMenuComponent});
    //routes.push({path: 'login', component: TeilerMainMenuComponent, canActivate: [AuthGuard]});
    //routes.push({path: 'logout', component: TeilerMainMenuComponent});
  }

  private static addFinalRoutes(routes: Route[]) {
    //routes.push({path: '**', component: EmptyRouteComponent});
  }

  public static fetchBasicRoutes() {
    let routes: Route[] = [];

    this.addFirstRoutes(routes);
    this.addFinalRoutes(routes);

    return routes;
  }


}
