'use strict';

/**
 * @ngdoc function
 * @name jsunittestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsunittestingApp
 */
angular.module('controllers.MainCtrl', ['services.thingsAsPromised'])
  .controller('MainCtrl', function ($scope, things) {
    things.getAll()
      .then(function(allThings) {
        $scope.awesomeThings = allThings;
      });
  });
