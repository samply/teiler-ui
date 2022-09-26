import {Injectable} from '@angular/core';
import {QualityReportService} from "./quality-report.service";
import {ConfigurationService} from "./configuration.service";
import {TeilerApp, TeilerRole} from "./teiler-app";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TeilerAuthService} from "../security/teiler-auth.service";
import {environment} from "../../environments/environment";

@Injectable()
export class TeilerService {

  allTeilerApps: TeilerApp[] = [];
  teilerApps: TeilerApp[] = [];
  teilerAppBehaviorSubject = new BehaviorSubject(this.teilerApps);


  constructor(
    private authService: TeilerAuthService,
    httpClient: HttpClient,
    qualityReportService: QualityReportService,
    configurationService: ConfigurationService
  ) {
    [qualityReportService, configurationService].forEach(teilerApp => this.allTeilerApps.push(teilerApp));
    this.filterTeilerApps();
    httpClient.get<TeilerApp[]>(this.getTeilerCoreUrl()).subscribe(teilerApps => {
      this.addTeilerCoreApps(teilerApps);
      this.filterTeilerApps()
    });
  }

  getTeilerCoreUrl(){
    //TODO
    //return environment.config.TEILER_CORE_URL + '/apps/' + environment.config.DEFAULT_LANGUAGE.toLowerCase();
    return "http://localhost:8085/apps/de";
  }

  filterTeilerApps() {
    this.teilerApps = [];
    this.allTeilerApps.filter(teilerApp => this.isAuthorized(teilerApp)).forEach(teilerApp => this.teilerApps.push(teilerApp))
    this.teilerAppBehaviorSubject.next(this.teilerApps);
  }

  isAuthorized(teilerApp: TeilerApp) {

    let isAuthorized = false;

    let teilerAppRoles = new Set(teilerApp.roles);
    if (teilerAppRoles.size == 0){
      isAuthorized = true;
    } else if (teilerAppRoles.has(TeilerRole.TEILER_PUBLIC) && this.authService.getRoles().length == 0) {
      isAuthorized = true;
    } else {
      for (let role of this.authService.getRoles()) {
        if (teilerAppRoles.has(TeilerRole[role as keyof typeof TeilerRole])) {
          return true;
        }
      }
    }

    return isAuthorized;
  }

  addTeilerCoreApps(teilerCoreApps: TeilerApp[]) {

    let embeddedTeilerAppsMap = new Map(this.allTeilerApps.map(teilerApp => [teilerApp.name, teilerApp]));
    teilerCoreApps.forEach(teilerCoreApp => {
      if (embeddedTeilerAppsMap.has(teilerCoreApp.name)) {
        // @ts-ignore
        this.mergeTeilerApps(embeddedTeilerAppsMap.get(teilerCoreApp.name), teilerCoreApp);
      } else {
        this.allTeilerApps.push(teilerCoreApp);
      }
    });

    this.sortTeilerApps();

  }

  mergeTeilerApps(embeddedTeilerApp: TeilerApp, teilerCoreApp: TeilerApp) {
    Reflect.ownKeys(teilerCoreApp).forEach(property => {
      let teilerCorAppValue = Reflect.get(teilerCoreApp, property);
      if (teilerCorAppValue !== null && teilerCorAppValue !== undefined) {
        Reflect.set(embeddedTeilerApp, property, teilerCorAppValue);
      }
    })
  }

  followTeilerApps(): Observable<TeilerApp[]> {
    return this.teilerAppBehaviorSubject.asObservable();
  }

  sortTeilerApps() {
    this.allTeilerApps = this.allTeilerApps.sort((teilerApp1, teilerApp2) => this.compareOrder(teilerApp1, teilerApp2));
  }

  compareOrder(teilerApp1: TeilerApp, teilerApp2: TeilerApp): number {

    if (teilerApp1.order === undefined && teilerApp2.order === undefined) {
      return 0;
    } else if (teilerApp1.order !== undefined && teilerApp2.order === undefined) {
      return -1;
    } else if (teilerApp1.order === undefined && teilerApp2.order !== undefined) {
      return 1;
    } else {
      // @ts-ignore
      return teilerApp1.order - teilerApp2.order;
    }
  }

}
