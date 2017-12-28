
var chai = require('chai');
var mocha = require('mocha');

var should = chai.should();
var describe = mocha.describe;
var it = mocha.it;

describe('Test Stack', function () {
  it('should work with 2+2=4', function () {
    (2 + 2).should.equal(4);
  });
});
