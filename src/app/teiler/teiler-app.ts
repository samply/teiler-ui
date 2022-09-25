export enum TeilerRoles{
  TEILER_PUBLIC,
  TEILER_USER,
  TEILER_ADMIN
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
  roles: TeilerRoles[];
  iconClass?: string;
  iconSourceUrl?: string;
  backendUrl?: string;
  order?: string;

}

export abstract class LocalTeilerApp implements TeilerApp{

  abstract description: string;
  abstract iconClass: string | undefined;
  abstract iconSourceUrl: string | undefined;
  abstract name: string;
  abstract routerLink: string;
  abstract title: string;

  activated: boolean = false;
  backendUrl: string | undefined = undefined;
  externLink: boolean = false;
  local: boolean = true;
  order: string | undefined = undefined;
  roles: TeilerRoles[] = [];
  singleSpaLink: string | undefined = undefined;
  singleSpaMainJs: string | undefined = undefined;
  sourceUrl: string | undefined = undefined;

}
