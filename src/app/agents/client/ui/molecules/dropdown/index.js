
var container = require('../../atoms/container');
var label = require('../../atoms/label');
var select = require('../../atoms/select');
var option = require('../../atoms/option');

require('./style.css');

var moduleName = 'molecules-dropdown';
var dropdownLabelClassName = 'molecules-dropdown-label';
var dropdownSelectClassName = 'molecules-dropdown-select';

module.exports = (function (context, properties) {
  var labelText = (properties || {}).labelText;
  var forId = (properties || {}).forId;

  var optionsFlatRendered = '';
  ((properties || {}).options || []).forEach(function (optionProperties) {
    optionsFlatRendered += option(context, optionProperties);
  });

  return container(context, {}, 
    label(context, { className: dropdownLabelClassName, forId: forId, text: labelText })+
    select(context, { className: dropdownSelectClassName, name: forId, id: forId }, optionsFlatRendered));
});
