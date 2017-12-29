
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var mocha = require('mocha');

var createUsecase = require('../../../../../../app/agents/client/usecases/bills/water/estimate');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;
chai.use(chaiAsPromised);

var defaultDescription = {
  age: 18,
  height: 170,
};

describe('Water Bill Estimate Usecase', function () {
  it('should estimate to a default profile', function (done) {
    expect(function () {
      var usecase = createUsecase();
      var defaultEstimate;
      expect(usecase.run(defaultDescription)

        .then(function (estimate) {
          defaultEstimate = estimate;
          return Promise.resolve({});
        })

        .then(function () {
          return usecase.run();
        })
        
        .then(function (autoEstimate) {
          return Promise.resolve(autoEstimate === defaultEstimate);
        })
      ).to.eventually.be.true.and.notify(done);
    }).to.not.throw();
  });
  
  describe('Age', function () {
    it('should add to the bill estimate half the age as a dollar amount', function (done) {
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(defaultDescription)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, defaultDescription, {
              age: 20,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(1).and.notify(done);
      }).to.not.throw();
    });
  });

  describe('Height', function () {
    it('should add to the bill estimate quarter the height as a dollar amount', function (done) {
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(defaultDescription)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, defaultDescription, {
              height: 178,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(2).and.notify(done);
      }).to.not.throw();
    });
  });
});
