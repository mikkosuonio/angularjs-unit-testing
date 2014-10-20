'use strict';

describe('Controller: MainCtrl:', function () {

  // load the controller's module
  beforeEach(module('controllers.MainCtrl'));

  beforeEach(module('mock.services.things'));

  var things;
  function captureDependencies(_things_) {
    things = _things_;
  }

  // Initialize the controller and a mock scope
  var MainCtrl,
    scope;
  function initController($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }

  describe('initialization:', function() {
    beforeEach(function() {
      inject(captureDependencies);
      things.getAll = jasmine.createSpy('getAll')
        .and.returnValue(['one', 'two']);
      inject(initController);
    });

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings).toEqual(['one', 'two']);
    });
  });
});
