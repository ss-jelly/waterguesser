
var chai = require('chai');
var mocha = require('mocha');

var configureStatefulRendering = require('../../../../../app/agents/client/framework/context/stateful-rendering');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: (Rendering) Context: Stateful Rendering', function () {
  it('should require that router functionality is available in the context', function () {
    var context = { flushRouterState: function () {}, setState: function () {} };
    expect(function () {
      configureStatefulRendering(context);
    }).to.throw();
  });
  it('should require that flush router functionality is available in the context', function () {
    var context = { router: { resolve: function () {} }, setState: function () {} };
    expect(function () {
      configureStatefulRendering(context);
    }).to.throw();
  });
  it('should require that state functionality is available in the context', function () {
    var context = { router: { resolve: function () {} }, flushRouterState: function () {} };
    expect(function () {
      configureStatefulRendering(context);
    }).to.throw();
  });

  it('should add to the context: functionality to render', function () {
    var context = { router: { resolve: function () {} }, flushRouterState: function () {}, setState: function () {} };
    expect(configureStatefulRendering(context).render).to.exist;
  });
  
  describe('modifies the preexisting state functionality', function () {
    it('should call the preexisting setState after modification', function () {
      var wasOriginalCalled = false;
      var originalSetState = function () {
        wasOriginalCalled = true;
      };

      var context = { router: { resolve: function () {} }, flushRouterState: function () {}, setState: originalSetState };

      configureStatefulRendering(context);
      context.render = function () {};

      context.setState({});

      expect(wasOriginalCalled).to.be.true;
    });
  });

  describe('Stateful Rendering', function () {
    it('should render if the state is different', function () {
      var context = { router: { resolve: function () {} }, flushRouterState: function () {}, setState: function () {} };
      configureStatefulRendering(context);
      
      var renderFunctionWasCalled = false;
      context.render = function () {
        renderFunctionWasCalled = true;
      };

      context.setState({ newState: true });

      expect(renderFunctionWasCalled).to.be.true;
    });
    it('should not render if the state hasnt changed', function () {
      var context = { router: { resolve: function () {} }, flushRouterState: function () {}, setState: function () {}, state: {} };
      configureStatefulRendering(context);
      
      var renderFunctionWasCalled = false;
      context.render = function () {
        renderFunctionWasCalled = true;
      };

      context.setState({});

      expect(renderFunctionWasCalled).to.be.false;
    });
    it('should not render if the states properties order changed but values are the same', function () {
      var context = { router: { resolve: function () {} }, flushRouterState: function () {}, setState: function () {}, state: { a: 1, b: 2 } };
      configureStatefulRendering(context);
      
      var renderFunctionWasCalled = false;
      context.render = function () {
        renderFunctionWasCalled = true;
      };

      context.setState({ b: 2, a: 1});

      expect(renderFunctionWasCalled).to.be.false;
    });
  });
});
