
var chai = require('chai');
var mocha = require('mocha');

var queryParameter = require('../../../../../app/agents/client/framework/browser/query-parameter');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: Browser: Query Parameter', function () {
  it('should be accessible by its name', function () {
    var queryString = '?lang=de';
    global.location = {
      search: queryString,
    };
    
    var parameterName = 'lang';
    var expectedResult = 'de';
    expect(queryParameter.get(parameterName)).to.deep.equal(expectedResult);
  });
  it('should return only strings', function () {
    var queryString = '?age=20';
    global.location = {
      search: queryString,
    };
    
    var parameterName = 'age';
    var expectedResult = '20';
    expect(queryParameter.get(parameterName)).to.deep.equal(expectedResult);
  });
  it('should return a blank string when not found', function () {
    global.location = {
    };
    
    var parameterName = 'age';
    var expectedResult = '';
    expect(queryParameter.get(parameterName)).to.deep.equal(expectedResult);
  });
});
