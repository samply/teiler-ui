import {Injectable} from '@angular/core';
import {QualityReportService} from "./quality-report.service";
import {ConfigurationService} from "./configuration.service";
import {TeilerApp} from "./teiler-app";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class TeilerService {

  teilerApps: TeilerApp[] = [];
  teilerAppBehaviorSubject = new BehaviorSubject(this.teilerApps);

  constructor(
    httpClient: HttpClient,
    qualityReportService: QualityReportService,
    configurationService: ConfigurationService
  ) {
    [qualityReportService, configurationService].forEach(teilerApp => this.teilerApps.push(teilerApp));
    //TODO:
    //httpClient.get<TeilerApp[]>(environment.config.TEILER_CORE_URL).subscribe((data: TeilerApp[]) => this.addTeilerCoreApps(data));
    httpClient.get<TeilerApp[]>("http://localhost:8085/apps/de").subscribe((data: TeilerApp[]) => this.addTeilerCoreApps(data));
  }

  addTeilerCoreApps(teilerCoreApps: TeilerApp[]) {

    let embeddedTeilerAppsMap = new Map(this.teilerApps.map(teilerApp => [teilerApp.name, teilerApp]));
    teilerCoreApps.forEach(teilerCoreApp => {
      if (embeddedTeilerAppsMap.has(teilerCoreApp.name)) {
        // @ts-ignore
        this.mergeTeilerApps(embeddedTeilerAppsMap.get(teilerCoreApp.name), teilerCoreApp);
      } else {
        this.teilerApps.push(teilerCoreApp);
      }
    });
    this.teilerAppBehaviorSubject.next(this.teilerApps);

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

}
