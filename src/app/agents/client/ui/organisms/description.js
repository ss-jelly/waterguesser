
var form = require('../atoms/form');

var language = require('../molecules/language');
var age = require('../molecules/age');
var height = require('../molecules/height');
var hairColor = require('../molecules/hair-color');
var hairLength = require('../molecules/hair-length');
var eyeColor = require('../molecules/eye-color');
var submit = require('../molecules/submit');

module.exports = (function (context, properties) {
  return form(context, { action: '/result' }, 
    language(context)+
    age(context)+
    height(context)+
    hairColor(context)+
    hairLength(context)+
    eyeColor(context)+
    submit(context));
});
