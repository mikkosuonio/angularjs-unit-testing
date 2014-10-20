'use strict';

describe('Controller: MainCtrl:', function () {

  // load the controller's module
  beforeEach(module('controllers.MainCtrl'));

  beforeEach(module('mock.services.things'));

  var things;
  function captureDependencies(_things_) {
    things = _things_;
  }

  var $q;
  function captureTestDependencies(_$q_) {
    $q = _$q_;
  }
  beforeEach(function() {
    inject(captureDependencies);
    inject(captureTestDependencies);
  });

  // Initialize the controller and a mock scope
  var MainCtrl,
    scope;
  function initController($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    flushPromises();
  }

  describe('initialization:', function() {
    beforeEach(function() {
      things.getAll = jasmine.createSpy('getAll')
        .and.returnValue($q.when(['one', 'two']));
      inject(initController);
    });

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings).toEqual(['one', 'two']);
    });
  });

  function flushPromises() {
    inject(function($rootScope) {
      $rootScope.$apply();
    });
  }
});
