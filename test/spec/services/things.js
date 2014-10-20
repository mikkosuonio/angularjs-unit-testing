'use strict';

describe('Service: services.things.things:', function () {

  // load the service's module
  beforeEach(module('services.things'));

  // instantiate service
  var things;
  beforeEach(inject(function (_things_) {
    things = _things_;
  }));

  it('should give a list of things', function () {
    var result = things.getAll();
    expect(result.length).toEqual(3);
  });

});
