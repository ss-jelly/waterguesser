
var container = require('../../atoms/container');
var li = require('../../atoms/li');
var input = require('../../atoms/input');
var label = require('../../atoms/label');
var ul = require('../../atoms/ul');

require('./style.css');

var labelClassName = 'molecules-segmented-control-label-header';
var ulClassName = 'molecules-segmented-control-ul';
var liClassName = 'molecules-segmented-control-li';
var inputClassName = 'molecules-segmented-control-input';
var liLabelClassName = 'molecules-segmented-control-li-label';

module.exports = (function (context, properties) {
  var labelText = (properties || {}).labelText;
  var forId = (properties || {}).forId || '';

  var optionsFlatRendered = '';
  ((properties || {}).options || []).forEach(function (optionProperties, index) {
    var isChecked = index === 0;
    var inputId = forId + '-' + optionProperties.value;
    var name = optionProperties.name;
    optionsFlatRendered += li(context, { className: liClassName }, 
      input(context, { className: inputClassName, type: 'radio', checked: isChecked, name: forId, id: inputId, value: optionProperties.value })+
      label(context, { className: liLabelClassName, forId: inputId, text: name }));
  });

  return container(context, {},
    label(context, { className: labelClassName, forId: forId, text: labelText  })+
    ul(context, { className: ulClassName }, optionsFlatRendered));
});
