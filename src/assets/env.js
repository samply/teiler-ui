(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["config"] = {
    "DEFAULT_LANGUAGE": "DE",
    "TEILER_CORE_URL": "http://localhost:8085",
    "KEYCLOAK_URL": "http://localhost:8180/auth",
    "KEYCLOAK_REALM": "teiler-ui",
    "KEYCLOAK_CLIENT_ID": "teiler-ui"
  };

})(this);
