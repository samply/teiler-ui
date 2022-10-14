import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FailedInquiriesService extends EmbeddedTeilerApp{

  description: string = "Failed Inquiries";
  iconClass: string | undefined = "bi bi-exclamation-triangle";
  iconSourceUrl: string | undefined = undefined;
  roles: TeilerRole[] = [TeilerRole.TEILER_USER];
  title: string = "Failed inquiries";

  constructor(router: Router) {
    super(EmbeddedTeilerApps.FAILED_INQUIRIES, router);
  }

}
