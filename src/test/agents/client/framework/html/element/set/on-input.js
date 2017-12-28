
var chai = require('chai');
var mocha = require('mocha');

var htmlElementSetOnInput = require('../../../../../../../app/agents/client/framework/html/element/set/on-input');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Html Element Set On Input', function () {
  it('should set the oninput of a given html element', function () {
    expect(function () {
      var inputElement = {};
      var inputCallback = function () {
        return 3.14;
      };
  
      var output = { oninput: inputCallback };

      htmlElementSetOnInput(inputElement, inputCallback);
      expect(inputElement).to.deep.equal(output);
    }).to.not.throw();
  });

  it('should not throw exception with undefined arguments', function () {
    expect(htmlElementSetOnInput).to.not.throw();
  });
});
