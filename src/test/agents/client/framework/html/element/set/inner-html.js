
var chai = require('chai');
var mocha = require('mocha');

var htmlElementSetInnerHTML = require('../../../../../../../app/agents/client/framework/html/element/set/inner-html');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Html Element Set Inner Html', function () {
  it('should set the inner html of a given html element', function () {
    expect(function () {
      var inputElement = {};
      var inputInnerHTML = '<p>this is an amazing test</p>';
  
      var output = { innerHTML: inputInnerHTML };

      htmlElementSetInnerHTML(inputElement, inputInnerHTML);
      expect(inputElement).to.deep.equal(output);
    }).to.not.throw();
  });

  it('should not throw exception with undefined arguments', function () {
    expect(htmlElementSetInnerHTML).to.not.throw();
  });

  describe('text argument', function () {
    describe('should be turned into a blank string when', function () {
      it('is undefined', function () {
        expect(function () {
          var inputElement = {};

          var output = { innerHTML: '' };

          htmlElementSetInnerHTML(inputElement);
          expect(inputElement).to.deep.equal(output);
        }).to.not.throw();
      });
      it('is null', function () {
        expect(function () {
          var inputElement = {};
          var inputInnerHTML = null;

          var output = { innerHTML: '' };

          htmlElementSetInnerHTML(inputElement, inputInnerHTML);
          expect(inputElement).to.deep.equal(output);
        }).to.not.throw();
      });
    });
  });
});
