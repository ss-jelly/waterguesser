
var chai = require('chai');
var mocha = require('mocha');

var descriptionSchema = require('../../../../app/agents/client/schemas/description');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('Description Entity Schema', function () {
  it('should have defaults', function () {
    expect(descriptionSchema.defaults).to.exist;
  });
  describe('Defaults', function () {
    it('should have a default age', function () {
      expect(descriptionSchema.defaults.age).to.exist;
    });
    it('should have a default height', function () {
      expect(descriptionSchema.defaults.height).to.exist;
    });
    it('should have a default hairColor', function () {
      expect(descriptionSchema.defaults.hairColor).to.exist;
    });
    it('should have a default hairLength', function () {
      expect(descriptionSchema.defaults.hairLength).to.exist;
    });
  });
});
