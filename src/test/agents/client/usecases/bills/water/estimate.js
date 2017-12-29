
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var mocha = require('mocha');

var createUsecase = require('../../../../../../app/agents/client/usecases/bills/water/estimate');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;
chai.use(chaiAsPromised);

describe('Water Bill Estimate Usecase', function () {
  it('should estimate to a default profile', function () {
    expect(function () {
      var usecase = createUsecase();
      expect(usecase.run()).to.eventually.equal(0);
    }).to.not.throw();
  });
});
