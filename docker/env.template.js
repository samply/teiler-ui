(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["config"] = {
    "example1": "${EXAMPLE_1}",
    "example2": "${EXAMPLE_2}"
  };

})(this);
