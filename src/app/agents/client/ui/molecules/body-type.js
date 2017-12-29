
var browser = require('../../framework/browser');

var descriptionSchema = require('../../schemas/description');

var container = require('../atoms/container');
var lineBreak = require('../atoms/line-break');

var segmentedControl = require('./segmented-control');

var propertyId = browser.queryParameter.name.bodyType;

module.exports = (function (context, properties) {
  return container(context, {}, segmentedControl(context, {
    forId: propertyId,
    labelText: context.resources.strings.theirBodyTypeQuestion,
    options: [
      {
        value: descriptionSchema.bodyTypes.average,
        image: context.resources.images.bodyType.average,
        alt: context.resources.strings.average,
      },
      {
        value: descriptionSchema.bodyTypes.muscular,
        image: context.resources.images.bodyType.muscular,
        alt: context.resources.strings.muscular,
      },
      {
        value: descriptionSchema.bodyTypes.overweight,
        image: context.resources.images.bodyType.overweight,
        alt: context.resources.strings.overweight,
      },
    ],
  })+lineBreak(context));
});
