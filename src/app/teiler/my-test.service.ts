import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MyTestService extends EmbeddedTeilerApp  {

  description: string = "my test description";
  iconClass: string = "bi bi-8-square-fill";
  iconSourceUrl: string | undefined = undefined;
  title: string = "My Test";
  roles: TeilerRole[] = [TeilerRole.TEILER_PUBLIC];

  constructor(router: Router) {
    super(EmbeddedTeilerApps.MY_TEST, router);
  }

}
