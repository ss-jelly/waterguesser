
var createStrings = require('../strings');

module.exports = function (context, locale) {
  context.resources = {
    strings: createStrings(locale),
  };

  return context;
};
