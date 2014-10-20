'use strict';

/**
 * @ngdoc service
 * @name jsunittestingApp.things
 * @description
 * # things
 * Factory in the jsunittestingApp.
 */
angular.module('services.things', [])
  .factory('things', function () {
    var getAll = function() {
      return [
        {
          'name': 'HTML5 Boilerplate',
          'description': 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
        },
        {
          'name': 'AngularJS',
          'description': 'AngularJS is a toolset for building the framework most suited to your application development.'
        },
        {
          'name': 'Karma',
          'description': 'Spectacular Test Runner for JavaScript.'
        }
      ];
    };

    // Public API here
    return {
      getAll: getAll
    };
  });
