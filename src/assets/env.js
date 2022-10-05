(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["teilerConfig"] = {
    "DEFAULT_LANGUAGE": "DE",
    "TEILER_CORE_URL": "http://localhost:8085",
    "KEYCLOAK_URL": "http://localhost:8180/auth",
    "KEYCLOAK_REALM": "teiler-ui",
    "KEYCLOAK_CLIENT_ID": "teiler-ui",
    "TEILER_ADMIN_NAME": "Max Mustermann",
    "TEILER_ADMIN_EMAIL": "max.mustermann@teiler-example.com",
    "TEILER_ADMIN_PHONE": "+49 123 456789",
    "TEILER_PROJECT": "DKTK"
  };

})(this);
