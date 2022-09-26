import {KeycloakService} from "keycloak-angular";
import {environment} from "../../../environments/environment";


export function initializeKeycloak(keycloak: KeycloakService){

  return () => keycloak.init({

    /* TODO:
    config: {
      url: environment.config.KEYCLOAK_URL,
      realm: environment.config.KEYCLOAK_REALM,
      clientId: environment.config.KEYCLOAK_CLIENT_ID
    },*/

    config: {
      url: 'http://localhost:8180/auth',
      realm: 'teiler-ui',
      clientId: 'teiler-ui'
    },
    initOptions: {
      onLoad: 'check-sso',
      checkLoginIframe: false,
    },
    bearerExcludedUrls: ['http://localhost:8085']
    // TODO:
    //bearerExcludedUrls: [environment.config.TEILER_CORE_URL]

  });

}
