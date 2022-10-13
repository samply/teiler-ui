import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FunctionTestsService extends EmbeddedTeilerApp {

  description: string = "Check the connectivity with other local components";
  iconClass: string = "bi bi-plugin";
  iconSourceUrl: string | undefined = undefined;
  title: string = "Tests";
  roles: TeilerRole[] = [TeilerRole.TEILER_ADMIN];

  constructor(router: Router) {
    super(EmbeddedTeilerApps.FUNCTION_TESTS, router);
  }

}
