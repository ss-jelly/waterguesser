
var stringsEn = require('./en');
var stringsTr = require('./tr');
var stringsOsm = require('./osm');

module.exports = function (localization) {
  switch (localization) {
  case stringsTr.localizationCode:
    return stringsTr;
  case stringsOsm.localizationCode:
    return stringsOsm;
  case stringsEn.localizationCode:
  default:
    return stringsEn;
  }
};
