'use strict';

/**
 * @ngdoc function
 * @name jsunittestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsunittestingApp
 */
angular.module('jsunittestingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
