
var container = require('../../atoms/container');
var input = require('../../atoms/input');
var label = require('../../atoms/label');

require('./style.css');

var labelClassName = 'molecules-radio-group-label-header';
var inputsContainerClassName = 'molecules-radio-group-input-container';

module.exports = (function (context, properties) {
  var labelText = (properties || {}).labelText;
  var forId = (properties || {}).forId || '';

  var optionsFlatRendered = '';
  ((properties || {}).options || []).forEach(function (optionProperties, index) {
    var isChecked = index === 0;
    var thisLabelClassName = isChecked === true ? 'checked' : '';

    var inputId = forId + '-' + optionProperties.value;
    var name = optionProperties.name;
    optionsFlatRendered += label(context, { className: thisLabelClassName }, 
      input(context, { 
        type: 'radio', 
        checked: isChecked, 
        name: forId, 
        value: optionProperties.value
      }, optionProperties.name));
  });

  return container(context, {},
    label(context, { className: labelClassName, forId: forId, text: labelText  })+
    container(context, { className: inputsContainerClassName }, optionsFlatRendered));
});
