
var stringsTr = require('../../framework/strings/tr');
var stringsOsm = require('../../framework/strings/osm');

var browser = require('../../framework/browser');

var descriptionSchema = require('../../schemas/description');

var container = require('../atoms/container');
var lineBreak = require('../atoms/line-break');

var radioGroup = require('./radio-group');

var propertyId = browser.queryParameter.name.eyeColor;

module.exports = (function (context) {
  var options = [
    {
      value: descriptionSchema.eyeColors.brown,
      name: context.resources.strings.brown,
    },
    {
      value: descriptionSchema.eyeColors.grey,
      name: context.resources.strings.grey,
    },
    {
      value: descriptionSchema.eyeColors.green,
      name: context.resources.strings.green,
    },
    {
      value: descriptionSchema.eyeColors.blue,
      name: context.resources.strings.blue,
    },
  ];

  if (context.resources.strings.localizationCode === stringsTr.localizationCode ||
      context.resources.strings.localizationCode === stringsOsm.localizationCode) {
    options.push({
      value: descriptionSchema.eyeColors.ela,
      name: context.resources.strings.ela,
    });
    options.push({
      value: descriptionSchema.eyeColors.kehribar,
      name: context.resources.strings.kehribar,
    });
  }

  return container(context, {}, 
    radioGroup(context, {
      forId: propertyId,
      labelText: context.resources.strings.theirEyeColorQuestion,
      options: options,
    })+
    lineBreak());
});
