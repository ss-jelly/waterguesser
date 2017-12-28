
var chai = require('chai');
var mocha = require('mocha');

var configureRenderOnDocument = require('../../../../../app/agents/client/framework/context/render-on-document');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('(Rendering) Context: Render On Document', function () {
  it('should add to the context: functionality to render on document', function () {;
    expect(configureRenderOnDocument({}).renderOnDocument).to.exist;
  });
  describe('renderOnDocument', function () {
    describe('renderView', function () {
      it('should throw if undefined', function () {
        global.document = { getElementById: function () { return null; } };
        expect(configureRenderOnDocument({}).renderOnDocument).to.throw();
      });
      it('should throw if null', function () {
        global.document = { getElementById: function () { return null; } };
        expect(function () {
          configureRenderOnDocument({}).renderOnDocument(null);
        }).to.throw();
      });
      it('should throw if not a function', function () {
        global.document = { getElementById: function () { return null; } };
        expect(function () {
          configureRenderOnDocument({}).renderOnDocument({});
        }).to.throw();
      });
    });
  });
});
