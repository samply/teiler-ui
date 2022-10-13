import {environment} from "../environments/environment";
import {Router} from "@angular/router";


export function getMainRouterLinkFromRouter(router?: Router): string {
  return getRouterLink(router, '');
}

export function getLoginRouterLinkFromRouter(router?: Router): string {
  return getRouterLink(router, 'login');
}

export function getLogoutRouterLinkFromRouter(router?: Router): string {
  return getRouterLink(router, 'logout');
}

export function getRouterLink(router: Router | undefined, base: string) {
  if (router != undefined) {
    let language = getLanguage(router);
    if (environment.config.DEFAULT_LANGUAGE.toLowerCase() === language) {
      language = '';
    }
    base = language + ((language.length > 0 && base.length > 0) ? '/' : '') + base;
  }
  return base;
}

export function getLanguage(router: Router): string {
  let language = environment.config.DEFAULT_LANGUAGE.toLowerCase();
  let url = router.url;
  let index1 = url.indexOf('/');
  if (index1 > -1 && index1 + 1 < url.length) {
    let index2 = url.indexOf('/', index1 + 1);
    let tempLanguage = (index2 > -1) ? url.substring(index1 + 1, index2) : url.substring(index1 + 1);
    if (isLanguage(tempLanguage)){
      language = tempLanguage;
    }
  }
  return language;
}

function isLanguage(code: string): boolean{
  // @ts-ignore
  return require('cldr-core/availableLocales.json').availableLocales.full.indexOf(code) > -1;
}
