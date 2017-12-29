
var chai = require('chai');
var mocha = require('mocha');

var images = require('../../../../app/agents/client/framework/images');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: Image Resources', function () {
  it('should be a plain object', function () {
    expect(images).to.be.a('object');
  });
});
