'use strict';

/**
 * @ngdoc function
 * @name jsunittestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsunittestingApp
 */
angular.module('controllers.MainCtrl', ['services.things'])
  .controller('MainCtrl', function ($scope, things) {
    $scope.awesomeThings = things.getAll();
  });
