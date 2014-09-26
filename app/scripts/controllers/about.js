'use strict';

/**
 * @ngdoc function
 * @name jsunittestingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsunittestingApp
 */
angular.module('jsunittestingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
