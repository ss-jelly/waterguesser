
var chai = require('chai');
var mocha = require('mocha');

var createUsecase = require('../../../../../../app/agents/client/usecases/bills/water');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Water Bills Usecases', function () {
  it('should be able to estimate', function () {
    var usecase = createUsecase();

    expect(usecase.estimate).to.exist;
  });
});
