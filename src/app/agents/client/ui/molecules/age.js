
var browser = require('../../framework/browser');

var rangeSlider = require('./range-slider');

var propertyId = browser.queryParameter.name.age;

var minimumAge = 1;
var maximumAge = 100;
var defaultAge = 18;

var outputPropertyId = 'molecules-age-output-property';

module.exports = (function (context, properties) {
  return rangeSlider(context, {
    forId: propertyId,
    outputId: outputPropertyId,
    labelText: context.resources.strings.theirAgeQuestion,

    minimumValue: minimumAge,
    maximumValue: maximumAge,
    value: defaultAge,
  });
});
