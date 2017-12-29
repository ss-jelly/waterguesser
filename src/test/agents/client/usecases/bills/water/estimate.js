
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var mocha = require('mocha');

var descriptionSchema = require('../../../../../../app/agents/client/schemas/description');

var createUsecase = require('../../../../../../app/agents/client/usecases/bills/water/estimate');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;
chai.use(chaiAsPromised);

describe('Water Bill Estimate Usecase', function () {
  describe('How thorough should this be tested?', function () {
    it('is business logic whos numbers are maybe very important to get correct, test thoroughly', function () {
    });
  });

  it('should estimate to a default description', function (done) {
    expect(function () {
      var usecase = createUsecase();
      var defaultEstimate;
      expect(usecase.run(descriptionSchema.defaults)

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
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
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
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
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

  describe('Hair Color', function () {
    it('should add to the bill estimate 1 for black', function (done) {
      var expectedDifference = 0;
      var inputHairColor = descriptionSchema.hairColors.black;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairColor: inputHairColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 2 for blonde', function (done) {
      var expectedDifference = 1;
      var inputHairColor = descriptionSchema.hairColors.blonde;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairColor: inputHairColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 3 for brown', function (done) {
      var expectedDifference = 2;
      var inputHairColor = descriptionSchema.hairColors.brown;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairColor: inputHairColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 4 for grey', function (done) {
      var expectedDifference = 3;
      var inputHairColor = descriptionSchema.hairColors.grey;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairColor: inputHairColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 5 for red', function (done) {
      var expectedDifference = 4;
      var inputHairColor = descriptionSchema.hairColors.red;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairColor: inputHairColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
  });

  describe('Hair Length', function () {
    it('should add to the bill estimate 1 for long', function (done) {
      var expectedDifference = 0;
      var inputHairLength = descriptionSchema.hairLengths.long;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairLength: inputHairLength,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 2 for middle', function (done) {
      var expectedDifference = 1;
      var inputHairLength = descriptionSchema.hairLengths.middle;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairLength: inputHairLength,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 3 for short', function (done) {
      var expectedDifference = 2;
      var inputHairLength = descriptionSchema.hairLengths.short;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairLength: inputHairLength,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 4 for bald', function (done) {
      var expectedDifference = 3;
      var inputHairLength = descriptionSchema.hairLengths.bald;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              hairLength: inputHairLength,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
  });

  describe('Hair Length', function () {
    it('should add to the bill estimate 1 for brown', function (done) {
      var expectedDifference = 0;
      var inputEyeColor = descriptionSchema.eyeColors.brown;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              eyeColor: inputEyeColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 2 for grey', function (done) {
      var expectedDifference = 1;
      var inputEyeColor = descriptionSchema.eyeColors.grey;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              eyeColor: inputEyeColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 3 for green', function (done) {
      var expectedDifference = 2;
      var inputEyeColor = descriptionSchema.eyeColors.green;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              eyeColor: inputEyeColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 4 for blue', function (done) {
      var expectedDifference = 3;
      var inputEyeColor = descriptionSchema.eyeColors.blue;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              eyeColor: inputEyeColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 5 for kehribar', function (done) {
      var expectedDifference = 4;
      var inputEyeColor = descriptionSchema.eyeColors.kehribar;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              eyeColor: inputEyeColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
    it('should add to the bill estimate 6 for ela', function (done) {
      var expectedDifference = 5;
      var inputEyeColor = descriptionSchema.eyeColors.ela;
      expect(function () {
        var usecase = createUsecase();
        var defaultEstimate;
        expect(usecase.run(descriptionSchema.defaults)
  
          .then(function (estimate) {
            defaultEstimate = estimate;
            return Promise.resolve({});
          })
  
          .then(function () {
            return usecase.run(Object.assign({}, descriptionSchema.defaults, {
              eyeColor: inputEyeColor,
            }));
          })
          
          .then(function (estimate) {
            return Promise.resolve(estimate - defaultEstimate);
          })
        ).to.eventually.equal(expectedDifference).and.notify(done);
      }).to.not.throw();
    });
  });

  describe('Results', function () {
    it('should always be an integer', function () {
      it('should add to the bill estimate half the age as a dollar amount', function (done) {
        expect(function () {
          var usecase = createUsecase();
          var defaultEstimate;
          expect(usecase.run(descriptionSchema.defaults)
    
            .then(function (estimate) {
              defaultEstimate = estimate;
              return Promise.resolve({});
            })
    
            .then(function () {
              return usecase.run(Object.assign({}, descriptionSchema.defaults, {
                age: descriptionSchema.defaults.age+1,
              }));
            })
            
            .then(function (estimate) {
              return Promise.resolve(estimate - defaultEstimate);
            })
          ).to.eventually.equal(1).and.notify(done);
        }).to.not.throw();
      });
    });
  });
});
