
var chai = require('chai');
var mocha = require('mocha');

var htmlElementFindSingleById = require('../../../../../../../../../app/agents/client/framework/html/element/find/single/by/id');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: Html: Element: Find: Single: By: Id', function () {
  it('should not throw an exception for an undefined argument', function () {
    global.document = { getElementById: function () {} };
    expect(htmlElementFindSingleById).to.not.throw();
  });
  it('should find a html element by its id from the global document', function () {
    expect(function () {
      var input = 'app';
      var output = {};
  
      global.document = {
        getElementById: function (idToSearch) {
          if (idToSearch === input) {
            return output;
          } else {
            return null;
          }
        },
      };
  
      expect(htmlElementFindSingleById(input)).to.equal(output);
    }).to.not.throw();
  });
});
