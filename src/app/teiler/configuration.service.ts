import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends EmbeddedTeilerApp {

  constructor(router: Router) {
    super(EmbeddedTeilerApps.CONFIGURATION, router);
  }

  description: string = "Configure teiler services";
  iconClass: string = "bi bi-gear-wide";
  iconSourceUrl: string | undefined = undefined;
  title: string = "Teiler Configuration";
  roles: TeilerRole[] = [TeilerRole.TEILER_ADMIN];

  /*
  backendUrl: string | undefined = undefined; // TODO: set teiler-core URL
*/

}
