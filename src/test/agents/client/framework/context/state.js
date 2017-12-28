
var chai = require('chai');
var mocha = require('mocha');

var configureState = require('../../../../../app/agents/client/framework/context/state');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: (Rendering) Context: State', function () {
  it('should add to the context: state', function () {
    expect(configureState({}).state).to.deep.equal({});
  });
  it('should add to the context: setState', function () {
    expect(configureState({}).setState).to.exist;
  });

  describe('setState', function () {
    it('should set the state', function () {
      var context = {};
      configureState(context).setState({ test: 'passing' });
      expect(context.state).to.deep.equal({ test: 'passing' });
    });
    it('should ensure that state is never null or undefined', function () {
      var context = {};
      configureState(context).setState(null);
      expect(context.state).to.be.deep.equal({});
      configureState(context).setState(undefined);
      expect(context.state).to.be.deep.equal({});
    });
  });
});
