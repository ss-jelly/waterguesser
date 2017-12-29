
var browser = require('../../framework/browser');

var input = require('../atoms/input');

var languageInputName = browser.queryParameter.name.lang;

module.exports = (function (context) {
  return input(context, {
    type: 'hidden',
    name: languageInputName, 
    id: languageInputName, 
    value: context.resources.strings.localizationCode 
  });
});
