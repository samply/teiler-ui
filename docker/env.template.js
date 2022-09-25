(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["config"] = {
    "DEFAULT_LANGUAGE": "${DEFAULT_LANGUAGE}",
    "TEILER_CORE_URL": "${TEILER_CORE_URL}"
  };

})(this);
