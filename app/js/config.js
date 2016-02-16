'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {
  // Init module configuration options
  var applicationModuleName = 'angularjsapp';
  var applicationModuleVendorDependencies = [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'leseulsteve.angular-mongoose',
    'leseulsteve.angular-user-auth',
    'ngMessages',
    'leaflet-directive',
    'pascalprecht.translate',
    'uuid',
    'btford.socket-io',
    'ngImgCrop'
  ];

  // Add a new vertical module
  var registerModule = function (moduleName, dependencies) {
    // Create angular module
    angular
      .module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular
      .module(applicationModuleName)
      .requires
      .push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };
})();
