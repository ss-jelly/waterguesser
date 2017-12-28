
var chai = require('chai');
var mocha = require('mocha');

var browser = require('../../../../../app/agents/client/framework/browser');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: Browser', function () {
  describe('encapsulates the browser', function () {
    it('should expose the query parameters of the browser location', function () {
      expect(browser.queryParameter).to.exist;
    });
  });
});
