
var browser = require('../../framework/browser');

var descriptionSchema = require('../../schemas/description');

var container = require('../atoms/container');
var lineBreak = require('../atoms/line-break');

var segmentedControl = require('./segmented-control');

var propertyId = browser.queryParameter.name.facialHair;

module.exports = (function (context, properties) {
  return container(context, {}, segmentedControl(context, {
    forId: propertyId,
    labelText: context.resources.strings.theirFacialHairQuestion,
    options: [
      {
        value: descriptionSchema.facialHairs.stubble,
        image: context.resources.images.facialHair.stubble,
        alt: context.resources.strings.stubble,
      },
      {
        value: descriptionSchema.facialHairs.moustache,
        image: context.resources.images.facialHair.moustache,
        alt: context.resources.strings.moustache,
      },
      {
        value: descriptionSchema.facialHairs.goatee,
        image: context.resources.images.facialHair.goatee,
        alt: context.resources.strings.goatee,
      },
      {
        value: descriptionSchema.facialHairs.beard,
        image: context.resources.images.facialHair.beard,
        alt: context.resources.strings.beard,
      },
    ],
  })+lineBreak(context));
});
