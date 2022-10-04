import {Injectable} from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";

@Injectable({
  providedIn: 'root'
})
export class EventLogService extends EmbeddedTeilerApp {

  description: string = "Check the chronology of events";
  iconClass: string = "bi bi-book";
  iconSourceUrl: string | undefined = undefined;
  title: string = "Event Log";
  roles: TeilerRole[] = [TeilerRole.TEILER_ADMIN];

  constructor() {
    super(EmbeddedTeilerApps.EVENT_LOG);
  }

}
