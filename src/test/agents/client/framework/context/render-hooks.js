
var chai = require('chai');
var mocha = require('mocha');

var configureRenderHooks = require('../../../../../app/agents/client/framework/context/render-hooks');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: (Rendering) Context: Rendering Hooks', function () {
  it('should require that render functionality is available in the context', function () {
    var context = {};
    expect(function () {
      configureRenderHooks(context);
    }).to.throw();
  });
  
  describe('modifies the preexisting render functionality', function () {
    it('should call the preexisting render', function () {
      var wasOriginalCalled = false;
      var originalRender = function () {
        wasOriginalCalled = true;
      };

      var context = { render: originalRender };

      configureRenderHooks(context);

      context.render();

      expect(wasOriginalCalled).to.be.true;
    });
  });

  describe('Rendering Hooks', function () {
    describe('after', function () {
      describe('add', function () {
        it('should not add an undefined callback', function () {
          var context = { render: function () {} };
          configureRenderHooks(context);
          context.renderHooks.after.add();
          expect(context.renderHooks.after.chain).to.deep.equal([]);
        });
        it('should not add a null callback', function () {
          var context = { render: function () {} };
          configureRenderHooks(context);
          context.renderHooks.after.add(null);
          expect(context.renderHooks.after.chain).to.deep.equal([]);
        });
        it('should not add a callback to the chain', function () {
          var context = { render: function () {} };
          configureRenderHooks(context);
          var importantFunction = function () { return 3.14; };
          context.renderHooks.after.add(importantFunction);
          expect(context.renderHooks.after.chain).to.deep.equal([importantFunction]);
        });
        it('does not guarantee order', function () {
        });
      });
      it('should get called after rendering', function () {
        var context = { render: function () {} };
        
        configureRenderHooks(context);
  
        var wasRenderHookCalled = false;
        context.renderHooks.after.add(function () {
          wasRenderHookCalled = true;
        });
  
        context.render();
  
        expect(wasRenderHookCalled).to.be.true;
      });
      it('should call all the hooks registered', function () {
        var context = { render: function () {} };
        
        configureRenderHooks(context);
  
        var renderHooksCalled = 0;
        context.renderHooks.after.add(function () {
          renderHooksCalled += 1;
        });
        context.renderHooks.after.add(function () {
          renderHooksCalled += 1;
        });
        context.renderHooks.after.add(function () {
          renderHooksCalled += 1;
        });
  
        context.render();
  
        expect(renderHooksCalled).to.equal(3);
      });
      it('should clear the rendering hooks after each render', function () {
        var context = { render: function () {} };
        
        configureRenderHooks(context);
  
        var renderHooksCalled = 0;
        context.renderHooks.after.add(function () {
          renderHooksCalled += 1;
        });
        context.renderHooks.after.add(function () {
          renderHooksCalled += 1;
        });
        context.renderHooks.after.add(function () {
          renderHooksCalled += 1;
        });
  
        context.render();

        renderHooksCalled = 0;
        context.render();
  
        expect(renderHooksCalled).to.equal(0);
      });
    });
  });
});
