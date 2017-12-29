
var html = require('../../../framework/html');

var container = require('../../atoms/container');
var label = require('../../atoms/label');
var input = require('../../atoms/input');
var output = require('../../atoms/output');
var lineBreak = require('../../atoms/line-break');

require('./style.css');

var labelClassName = 'molecules-range-slider-label';
var containerClassName = 'molecules-range-slider-container';
var inputClassName = 'molecules-range-slider-input';
var outputClassName = 'molecules-range-slider-output';

module.exports = (function (context, properties) {
  var forId = (properties || {}).forId;
  var outputId = (properties || {}).outputId;
  var labelText = (properties || {}).labelText;
  var minimumValue = (properties || {}).minimumValue;
  var maximumValue = (properties || {}).maximumValue;
  var value = (properties || {}).value;

  context.renderHooks.after.add(function () {
    var rangeSliderElement = html.element.find.single.by.id(forId);
    var rangeSliderOutputElement = html.element.find.single.by.id(outputId);

    var getCurrentValue = function () {
      return parseInt(rangeSliderElement.value);
    };

    html.element.set.innerHtml(
      rangeSliderOutputElement,
      context.resources.strings.formatNumber(getCurrentValue()));
    
    html.element.set.onInput(rangeSliderElement, function() {
      html.element.set.innerHtml(
        rangeSliderOutputElement,
        context.resources.strings.formatNumber(getCurrentValue()));
    });
  });

  return container(context, {}, 
    label(context, { 
      className: labelClassName, 
      forId: forId, 
      text: labelText,
    })+
    container(context, { className: containerClassName },
      input(context, {
        className: inputClassName,
        type: 'range',
        name: forId, 
        id: forId, 
        minimum: minimumValue, 
        maximum: maximumValue, 
        value: value,
      })+
      output(context, {
        className: outputClassName,
        forId: forId, 
        id: outputId,
        value: value,
      }))+
    lineBreak());
});
