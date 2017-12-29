
var browser = require('../../framework/browser');

var rangeSlider = require('./range-slider');

var propertyId = browser.queryParameter.name.height;

var minimumHeight = 140;
var maximumHeight = 220;
var defaultHeight = 170;

var outputPropertyId = 'molecules-height-output-property';

module.exports = (function (context, properties) {
  return rangeSlider(context, {
    forId: propertyId,
    outputId: outputPropertyId,
    labelText: context.resources.strings.theirHeightQuestion,

    minimumValue: minimumHeight,
    maximumValue: maximumHeight,
    value: defaultHeight,
  });
});
