
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var mocha = require('mocha');

var createUsecase = require('../../../../../../app/agents/client/usecases/bills/water/estimate');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;
chai.use(chaiAsPromised);

describe('Water Bill Estimate Usecase', function () {
  it('should estimate to a default profile', function (done) {
    expect(function () {
      var usecase = createUsecase();
      expect(usecase.run()).to.eventually.equal(9).and.notify(done);
    }).to.not.throw();
  });
  
  describe('Age', function () {
    it('should add to the bill estimate half the age as a dollar amount', function (done) {
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run()
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run({
              age: 20,
            });
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(1).and.notify(done);
      }).to.not.throw();
    });
  });
});
