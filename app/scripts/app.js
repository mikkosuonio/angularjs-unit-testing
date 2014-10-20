'use strict';

/**
 * @ngdoc overview
 * @name jsunittestingApp
 * @description
 * # jsunittestingApp
 *
 * Main module of the application.
 */
angular
  .module('jsunittestingApp', [
    'controllers.MainCtrl',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
