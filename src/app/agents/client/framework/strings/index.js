
var stringsEn = require('./en');

module.exports = function (localization) {
  switch (localization) {
  case stringsEn.localizationCode:
  default:
    return stringsEn;
  }
};
