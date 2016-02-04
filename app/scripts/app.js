'use strict';

/**
 * @ngdoc overview
 * @name geolocationMapApp
 * @description
 * # geolocationMapApp
 *
 * Main module of the application.
 */
angular
  .module('geolocationMapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl as AboutCtrl',
        controllerAs: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
