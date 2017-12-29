
var form = require('../atoms/form');

var language = require('../molecules/language');
var age = require('../molecules/age');
var submit = require('../molecules/submit');

module.exports = (function (context, properties) {
  return form(context, { action: '/result' }, 
    language(context)+
    age(context)+
    submit(context));
});