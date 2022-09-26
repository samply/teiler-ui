import {Injectable} from '@angular/core';
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
    router: Router,
    protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }


  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    if (!this.authenticated) {
      //await this.keycloak.login({redirectUri: window.location.origin + state.url});
      await this.keycloak.login({redirectUri: window.location.origin});
    }

    return this.authenticated;

  }


}
