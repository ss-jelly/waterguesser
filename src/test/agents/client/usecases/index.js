
var chai = require('chai');
var mocha = require('mocha');

var createUsecase = require('../../../../app/agents/client/usecases');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Usecases', function () {
  it('should have usecases for bills', function () {
    var usecase = createUsecase();

    expect(usecase.bills).to.exist;
  });

  describe('Usecase', function () {
    it('should return an object', function () {
      expect(createUsecase()).to.be.an('object');
    });
    it('should have a run function, if it is an executeable usecase', function () {
    });
    describe('run function', function () {
      it('should return a promise', function () {
      });
    });
  });
});
