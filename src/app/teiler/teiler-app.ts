import {environment} from "../../environments/environment";

export enum TeilerRole{
  TEILER_PUBLIC = 'TEILER_PUBLIC',
  TEILER_USER = 'TEILER_USER',
  TEILER_ADMIN = 'TEILER_ADMIN'
}

export enum EmbeddedTeilerApps{
  CONFIGURATION = 'config',
  QUALITY_REPORT = 'quality-report'
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

}

export abstract class EmbeddedTeilerApp implements TeilerApp{

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


  constructor(name: string) {
    this.name = name;
    //TODO:
    //this.routerLink = environment.config.DEFAULT_LANGUAGE.toLowerCase() + '/' + name;
    this.routerLink = "de" + '/' + name;
  }

}
