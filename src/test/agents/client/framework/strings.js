
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

    describe('England', function () {
      it('should be be layout left to right', function () {
        expect(createStrings(stringsEn.localizationCode).rightToLeft).to.be.false;
      });

      describe('Currency', function () {
        it('should be 0 when undefined', function () {
          expect(createStrings(stringsEn.localizationCode).formatCurrency()).to.deep.equal('£0.00');
        });
        it('should be 0 when null', function () {
          expect(createStrings(stringsEn.localizationCode).formatCurrency(null)).to.deep.equal('£0.00');
        });
        it('should format the input money amount', function () {
          expect(createStrings(stringsEn.localizationCode).formatCurrency(123.23)).to.deep.equal('£123.23');
        });
      });

      describe('Numbers', function () {
        it('should be 0 when undefined', function () {
          expect(createStrings(stringsEn.localizationCode).formatNumber()).to.deep.equal('0');
        });
        it('should be 0 when null', function () {
          expect(createStrings(stringsEn.localizationCode).formatNumber(null)).to.deep.equal('0');
        });
        it('should format the input number amount', function () {
          expect(createStrings(stringsEn.localizationCode).formatNumber(123.23)).to.deep.equal('123.23');
        });
      });
    });
    describe('Turkey', function () {
      it('should be be layout left to right', function () {
        expect(createStrings(stringsTr.localizationCode).rightToLeft).to.be.false;
      });

      describe('Currency', function () {
        it('should be 0 when undefined', function () {
          expect(createStrings(stringsTr.localizationCode).formatCurrency()).to.deep.equal('₺0,00');
        });
        it('should be 0 when null', function () {
          expect(createStrings(stringsTr.localizationCode).formatCurrency(null)).to.deep.equal('₺0,00');
        });
        it('should format the input money amount', function () {
          expect(createStrings(stringsTr.localizationCode).formatCurrency(123.23)).to.deep.equal('₺123,23');
        });
      });

      describe('Numbers', function () {
        it('should be 0 when undefined', function () {
          expect(createStrings(stringsTr.localizationCode).formatNumber()).to.deep.equal('0');
        });
        it('should be 0 when null', function () {
          expect(createStrings(stringsTr.localizationCode).formatNumber(null)).to.deep.equal('0');
        });
        it('should format the input number amount', function () {
          expect(createStrings(stringsTr.localizationCode).formatNumber(123.23)).to.deep.equal('123,23');
        });
      });
    });
    describe('Osmanli Empire', function () {
      it('no longer exists', function () {
      });

      it('should be be layout right to left', function () {
        expect(createStrings(stringsOsm.localizationCode).rightToLeft).to.be.true;
      });
      
      describe('Currency', function () {
        it('should be 0 when undefined', function () {
          expect(createStrings(stringsOsm.localizationCode).formatCurrency()).to.deep.equal('٠ آقچه');
        });
        it('should be 0 when null', function () {
          expect(createStrings(stringsOsm.localizationCode).formatCurrency(null)).to.deep.equal('٠ آقچه');
        });
        it('should format the input money amount', function () {
          expect(createStrings(stringsOsm.localizationCode).formatCurrency(123.23)).to.deep.equal('١٢٣٫٢٣ آقچه');
        });
      });

      describe('Numbers', function () {
        it('should be 0 when undefined', function () {
          expect(createStrings(stringsOsm.localizationCode).formatNumber()).to.deep.equal('٠');
        });
        it('should be 0 when null', function () {
          expect(createStrings(stringsOsm.localizationCode).formatNumber(null)).to.deep.equal('٠');
        });
        it('should format the input number amount', function () {
          expect(createStrings(stringsOsm.localizationCode).formatNumber(123.23)).to.deep.equal('١٢٣٫٢٣');
        });
      });
    });
  });
});
