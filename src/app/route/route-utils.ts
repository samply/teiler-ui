import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

export const BASE_MAIN_ROUTER_LINK: string = '';
export const BASE_LOGIN_ROUTER_LINK: string = 'login';
export const BASE_LOGOUT_ROUTER_LINK: string = 'logout';


export function createMainRouterLink(router?: Router): string {
  return createRouterLinkForBase(router, BASE_MAIN_ROUTER_LINK);
}

export function createLoginRouterLink(router?: Router): string {
  return createRouterLinkForBase(router, BASE_LOGIN_ROUTER_LINK);
}

export function createLogoutRouterLink(router?: Router): string {
  return createRouterLinkForBase(router, BASE_LOGOUT_ROUTER_LINK);
}

export function createRouterLinkForBase(router: Router | undefined, base: string) {
  if (router != undefined) {
    base = createRouterLinkForBaseWithLocale(getLocale(router), base)
  }
  return base;
}

function createRouterLinkForBaseWithLocale(locale: string, base: string) {
  if (environment.config.DEFAULT_LANGUAGE.toLowerCase() === locale) {
    locale = '';
  }
  return locale + ((locale.length > 0 && base.length > 0) ? '/' : '') + base;
}

export function getLocale(router: Router): string {
  let locale = environment.config.DEFAULT_LANGUAGE.toLowerCase();
  let url = router.url;
  let index1 = url.indexOf('/');
  if (index1 > -1 && index1 + 1 < url.length) {
    let index2 = url.indexOf('/', index1 + 1);
    let tempLocale = (index2 > -1) ? url.substring(index1 + 1, index2) : url.substring(index1 + 1);
    if (isLocale(tempLocale)) {
      locale = tempLocale;
    }
  }
  return locale;
}

function isLocale(locale: string): boolean {
  // @ts-ignore
  return require('cldr-core/availableLocales.json').availableLocales.full.indexOf(locale) > -1;
}

export function getRouterLinkSwitchingLocale(router: Router, locale: string): string {
  let currentLocale = getLocale(router);
  let url = ignoreFirstSlash(router.url);
  if (url.length > 0 && currentLocale !== environment.config.DEFAULT_LANGUAGE.toLowerCase()){
    url = url.substring(locale.length);
    url = ignoreFirstSlash(url);
  }
  return createRouterLinkForBaseWithLocale(locale, url);
}

function ignoreFirstSlash (url: string){
  return (url.charAt(0) == '/') ? url.substring(1) : url;
}

export function getHref(routerLink: string) {
  return window.location.origin + ((routerLink.length > 0) ? '/' + routerLink : '');
}
