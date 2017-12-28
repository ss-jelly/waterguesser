
var chai = require('chai');
var mocha = require('mocha');

var context = require('../../../../../app/agents/client/framework/context');

var describe = mocha.describe;
var it = mocha.it;

var expect = chai.expect;

describe('Client Framework: (Rendering) Context', function () {
  it('should accept options', function () {
    expect(context({})).to.exist;
  });

  it('should be able to render on the document', function () {
    expect(context().renderOnDocument).to.exist;
  });

  it('should be able to get resources', function () {
    expect(context().resources).to.exist;
  });

  it('should be able to get the router', function () {
    expect(context().router).to.exist;
  });

  it('should be able to flush the router state', function () {
    expect(context().flushRouterState).to.exist;
  });

  it('should be able to get the state', function () {
    expect(context().state).to.exist;
  });

  it('should be able to set the state', function () {
    expect(context().setState).to.exist;
  });
  
  it('should be able to render the context', function () {
    expect(context().render).to.exist;
  });

  it('should be able to manipulate rendering event hooks', function () {
    expect(context().renderHooks).to.exist;
  });
});
