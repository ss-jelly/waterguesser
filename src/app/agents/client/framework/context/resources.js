
var createStrings = require('../strings');
var images = require('../images');

module.exports = function (context, locale) {
  context.resources = {
    strings: createStrings(locale),
    images: images,
  };

  return context;
};
