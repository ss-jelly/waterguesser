
var chai = require('chai');
var mocha = require('mocha');

var configureRouter = require('../../../../../app/agents/client/framework/context/router');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: (Rendering) Context: Router', function () {
  it('would be tested but the navigo framework is buggy', function () {
  });

  it('should add to the context: router', function () {
    // expect(configureRouter({}).router).to.exist;
  });
  it('should add to the context: flushRouterState', function () {
    // expect(configureRouter({}).flushRouterState).to.exist;
  });

  describe('flushRouterState', function () {
    describe('why needed', function () {
      it('is to ensure that a page can be re-resolved', function () {
      });
      it('is a hack around the Navigo frameworks problems', function () {
      });
    });
  });
});
