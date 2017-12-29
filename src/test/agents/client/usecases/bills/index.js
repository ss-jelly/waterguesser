
var chai = require('chai');
var mocha = require('mocha');

var createUsecase = require('../../../../../app/agents/client/usecases/bills');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Bills Usecases', function () {
  it('has water bills usecases', function () {
    var usecase = createUsecase();

    expect(usecase.water).to.exist;
  });
});
