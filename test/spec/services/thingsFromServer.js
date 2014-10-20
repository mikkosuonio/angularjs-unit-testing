'use strict';

describe('Service: services.thingsFromServer.things:', function () {

  // load the service's module
  beforeEach(module('services.thingsFromServer'));

  // capture dependencies
  var $httpBackend;
  beforeEach(inject(function captureDependencies(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));

  // instantiate service
  var things;
  beforeEach(inject(function initService(_things_) {
    things = _things_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should give a list of things', function () {
    // TODO
  });

});
