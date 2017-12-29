
var browser = require('../../framework/browser');

var descriptionSchema = require('../../schemas/description');

var container = require('../atoms/container');
var lineBreak = require('../atoms/line-break');

var dropdown = require('./dropdown');

var propertyId = browser.queryParameter.name.hairColor;

module.exports = (function (context, properties) {
  return container(context, {}, dropdown(context, {
    forId: propertyId,
    labelText: context.resources.strings.theirHairColorQuestion,
    options: [
      {
        value: descriptionSchema.hairColors.black,
        name: context.resources.strings.black,
      },
      {
        value: descriptionSchema.hairColors.blonde,
        name: context.resources.strings.blonde,
      },
      {
        value: descriptionSchema.hairColors.brown,
        name: context.resources.strings.brown,
      },
      {
        value: descriptionSchema.hairColors.red,
        name: context.resources.strings.red,
      },
      {
        value: descriptionSchema.hairColors.grey,
        name: context.resources.strings.grey,
      },
    ],
  })+lineBreak(context));
});
