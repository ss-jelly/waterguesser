
var chai = require('chai');
var mocha = require('mocha');

var stringsEn = require('../../../../app/agents/client/framework/strings/en');
var stringsTr = require('../../../../app/agents/client/framework/strings/tr');
var stringsOsm = require('../../../../app/agents/client/framework/strings/osm');
var createStrings = require('../../../../app/agents/client/framework/strings');

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe('String Resources', function () {
  describe('Getting a String resource', function () {
    it('should behave like a regular map with resources accessible by their English description', function () {
      var strings = createStrings();
      expect(strings.localizationCode).to.deep.equal(stringsEn.localizationCode);
    });
  });

  describe('Localization Support', function () {
    describe('Default Localization', function () {
      it('should be English when there is no localization specified', function () {
        var strings = createStrings();
        expect(strings.localizationCode).to.deep.equal(stringsEn.localizationCode);
      });
      it('should be English when there is no localization that matches the desired', function () {
        var strings = createStrings('ye olde english');
        expect(strings.localizationCode).to.deep.equal(stringsEn.localizationCode);
      });
    });

    it('should be able to choose English localization', function () {
      var strings = createStrings(stringsEn.localizationCode);
      expect(strings.localizationCode).to.deep.equal(stringsEn.localizationCode);
    });

    it('should be able to choose Turkce localization', function () {
      var strings = createStrings(stringsTr.localizationCode);
      expect(strings.localizationCode).to.deep.equal(stringsTr.localizationCode);
    });

    it('should be able to choose Osmanlica localization', function () {
      var strings = createStrings(stringsOsm.localizationCode);
      expect(strings.localizationCode).to.deep.equal(stringsOsm.localizationCode);
    });

    describe('Locality Differences', function () {
      it('should be able to describe whether locality is to be layout right to left', function () {
        expect(createStrings(stringsEn.localizationCode).rightToLeft).to.be.false;
        expect(createStrings(stringsOsm.localizationCode).rightToLeft).to.be.true;
      });
    });
  });
});
