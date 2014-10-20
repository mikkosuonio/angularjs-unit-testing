'use strict';

/**
 * @ngdoc service
 * @name jsunittestingApp.things
 * @description
 * # things
 * Factory in the jsunittestingApp.
 */
angular.module('services.thingsAsPromised', [])
  .factory('things', function ($http) {
    var getAll = function() {
      return $http({method: 'GET', url: 'resources/things.json'})
        .then(function(response) {
          return response.data;
        });
    };

    // Public API here
    return {
      getAll: getAll
    };
  });
