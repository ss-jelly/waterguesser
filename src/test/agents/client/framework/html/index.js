
var chai = require('chai');
var mocha = require('mocha');

var html = require('../../../../../app/agents/client/framework/html');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: Html', function () {
  it('is basically a tiny app specific custom jquery', function () {
  });
  
  describe('where all document access and manipulation is encapsulated', function () {
    it('should have an element package', function () {
      expect(html.element).to.exist;
    });
    it('should have a set package', function () {
      expect(html.set).to.exist;
    });
  });
});
