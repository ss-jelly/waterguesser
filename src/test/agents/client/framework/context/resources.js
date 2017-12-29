
var chai = require('chai');
var mocha = require('mocha');

var configureResources = require('../../../../../app/agents/client/framework/context/resources');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: (Rendering) Context: Resources', function () {
  it('should add to the context: resources', function () {
    expect(configureResources({}).resources).to.exist;
  });
  describe('resources', function () {
    it('should have string resources', function () {
      expect(configureResources({}).resources.strings).to.exist;
    });
    it('should have image resources', function () {
      expect(configureResources({}).resources.images).to.exist;
    });
  });
});
