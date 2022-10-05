import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface TeilerEnvironment {
  defaultLanguage: string;
  teilerCoreUrl: string;
  keycloakUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
  teilerAdminName: string;
  teilerAdminEmail: string;
  teilerAdminPhone: string;
  teilerProject: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private httpClient: HttpClient) {
  }

  getEnvironmentSubscriber(): Observable<TeilerEnvironment> {
    return this.httpClient.get<TeilerEnvironment>('/assets/environment.json');
  }

}
