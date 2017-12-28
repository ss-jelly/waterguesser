
var chai = require('chai');
var mocha = require('mocha');

var htmlSetTitle = require('../../../../../../app/agents/client/framework/html/set/title');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Client Framework: Html: Set: Title', function () {
  it('should set the title on the document', function () {
    global.document = {};
    htmlSetTitle('title');
    expect(global.document.title).to.deep.equal('title');
  });
  it('should set a blank title if title is undefined', function () {
    global.document = {};
    htmlSetTitle();
    expect(global.document.title).to.deep.equal('');
  });
  it('should set a blank title if title is null', function () {
    global.document = {};
    htmlSetTitle(null);
    expect(global.document.title).to.deep.equal('');
  });
});
