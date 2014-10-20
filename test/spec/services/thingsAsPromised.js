'use strict';

describe('Service: services.thingsAsPromised.things:', function () {

  // load the service's module
  beforeEach(module('services.thingsAsPromised'));

  // capture dependencies
  var $httpBackend;
  beforeEach(inject(function captureDependencies(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));

  // instantiate service
  var things;
  beforeEach(inject(function (_things_) {
    things = _things_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should give a list of things', function () {
    $httpBackend
      .expect('GET', 'resources/things.json')
      .respond([{name: 'a'}, {name: 'b'}]);

    var result;
    things.getAll()
      .then(function(data) {
        result = data;
      });
    $httpBackend.flush();

    expect(result).toEqual([{name: 'a'}, {name: 'b'}]);
  });
});
