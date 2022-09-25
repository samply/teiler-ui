import {Injectable} from '@angular/core';
import {LocalTeilerApp} from "./teiler-app";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends LocalTeilerApp {

  description: string = "Configure teiler services";
  iconClass: string = "bi bi-gear-wide";
  iconSourceUrl: string | undefined = undefined;
  name: string = "config";
  routerLink: string = "config";
  title: string = "Teiler Configuration";

  /*
  backendUrl: string | undefined = undefined; // TODO: set teiler-core URL
*/

}
