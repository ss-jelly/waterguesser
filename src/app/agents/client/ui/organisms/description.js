
var container = require('../atoms/container');
var form = require('../atoms/form');
var title = require('../atoms/title');

var language = require('../molecules/language');
var age = require('../molecules/age');
var height = require('../molecules/height');
var hairColor = require('../molecules/hair-color');
var hairLength = require('../molecules/hair-length');
var eyeColor = require('../molecules/eye-color');
var facialHair = require('../molecules/facial-hair');
var bodyType = require('../molecules/body-type');
var submit = require('../molecules/submit');

module.exports = (function (context, properties) {
  return container(context, {}, 
    title(context, { text: context.resources.strings.homePageTitle })+
    form(context, { action: '/result' }, 
      language(context)+
      age(context)+
      height(context)+
      hairColor(context)+
      hairLength(context)+
      eyeColor(context)+
      facialHair(context)+
      bodyType(context)+
      submit(context)));
});
