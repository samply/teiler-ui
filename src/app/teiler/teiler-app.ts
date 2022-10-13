import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {createRouterLinkForBase} from "../route/route-utils";

export enum TeilerRole {
  TEILER_PUBLIC = 'TEILER_PUBLIC',
  TEILER_USER = 'TEILER_USER',
  TEILER_ADMIN = 'TEILER_ADMIN'
}

export enum EmbeddedTeilerApps {
  CONFIGURATION = 'config',
  QUALITY_REPORT = 'quality-report',
  FUNCTION_TESTS = 'function-tests',
  EVENT_LOG = 'event-log'
}

export interface TeilerApp {

  name: string;
  title: string;
  description: string;
  routerLink: string;
  singleSpaLink?: string;
  sourceUrl?: string;
  singleSpaMainJs?: string;
  externLink: boolean;
  activated: boolean;
  local: boolean;
  roles: TeilerRole[];
  iconClass?: string;
  iconSourceUrl?: string;
  backendUrl?: string;
  order?: number;
  backendReachable?: boolean | undefined;
  frontendReachable?: boolean | undefined;

}

export abstract class EmbeddedTeilerApp implements TeilerApp {

  abstract description: string;
  abstract iconClass: string | undefined;
  abstract iconSourceUrl: string | undefined;
  abstract title: string;
  abstract roles: TeilerRole[];

  activated: boolean = false;
  backendUrl: string | undefined = undefined;
  externLink: boolean = false;
  local: boolean = true;
  name: string = "";
  order: number | undefined = undefined;
  routerLink: string = "";
  singleSpaLink: string | undefined = undefined;
  singleSpaMainJs: string | undefined = undefined;
  sourceUrl: string | undefined = undefined;
  frontendReachable: boolean = true;


  constructor(name: string, router: Router) {
    this.name = name;
    this.routerLink = createRouterLinkForBase(router, name);
    router.events.subscribe(routerEvent => this.routerLink = createRouterLinkForBase(router, name));
  }

}

export class EmptyTeilerApp implements TeilerApp {
  activated: boolean = false;
  backendUrl: undefined = undefined;
  description: string = "";
  externLink: boolean = false;
  iconClass: undefined = undefined;
  iconSourceUrl: undefined = undefined;
  local: boolean = true;
  name: string = "empty";
  order: undefined = undefined;
  roles: TeilerRole[] = [];
  routerLink: string = "/empty";
  singleSpaLink: undefined = undefined;
  singleSpaMainJs: undefined = undefined;
  sourceUrl: undefined = undefined;
  title: string = "";

}
