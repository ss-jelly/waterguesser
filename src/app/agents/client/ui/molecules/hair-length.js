
var browser = require('../../framework/browser');

var descriptionSchema = require('../../schemas/description');

var container = require('../atoms/container');
var lineBreak = require('../atoms/line-break');

var segmentedControl = require('./segmented-control');

var propertyId = browser.queryParameter.name.hairLength;

module.exports = (function (context, properties) {
  return container(context, {}, segmentedControl(context, {
    forId: propertyId,
    labelText: context.resources.strings.theirHairLengthQuestion,
    options: [
      {
        value: descriptionSchema.hairLengths.long,
        name: context.resources.strings.long,
      },
      {
        value: descriptionSchema.hairLengths.middle,
        name: context.resources.strings.middle,
      },
      {
        value: descriptionSchema.hairLengths.short,
        name: context.resources.strings.short,
      },
      {
        value: descriptionSchema.hairLengths.bald,
        name: context.resources.strings.bald,
      },
    ],
  })+lineBreak(context));
});
