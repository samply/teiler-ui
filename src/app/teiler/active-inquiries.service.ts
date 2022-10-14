import { Injectable } from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ActiveInquiriesService extends EmbeddedTeilerApp{

  description: string = "Active inquiries";
  iconClass: string | undefined = "bi bi-inbox";
  iconSourceUrl: string | undefined = undefined;
  roles: TeilerRole[] = [TeilerRole.TEILER_USER];
  title: string = "Active inquiries";

  constructor(router: Router) {
    super(EmbeddedTeilerApps.ACTIVE_INQUIRIES, router);
  }

}
