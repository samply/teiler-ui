import {KeycloakService} from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService){

  return () => keycloak.init({
    config: {
      url: 'http://localhost:8180/auth',
      realm: 'teiler-ui',
      clientId: 'teiler-ui'
    },
    initOptions: {
      onLoad: 'check-sso',
      //onLoad: 'login-required',
      checkLoginIframe: false,
    },
    bearerExcludedUrls: ['http://localhost:8085/apps', 'http://localhost:8085/import-map']

  });

}
