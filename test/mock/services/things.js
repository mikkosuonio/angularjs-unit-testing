'use strict';

angular.module('mock.services.things', [])
  .factory('things', function () {
    return {
      getAll: jasmine.createSpy('getAll')
    };
  });
