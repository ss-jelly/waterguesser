
var container = require('../../atoms/container');
var li = require('../../atoms/li');
var input = require('../../atoms/input');
var label = require('../../atoms/label');
var ul = require('../../atoms/ul');
var image = require('../../atoms/image');

require('./style.css');

var labelClassName = 'molecules-segmented-control-label-header';
var ulClassName = 'molecules-segmented-control-ul';
var liClassName = 'molecules-segmented-control-li';
var inputClassName = 'molecules-segmented-control-input';
var liLabelClassName = 'molecules-segmented-control-li-label';
var liImageClassName = 'molecules-segmented-control-li-image';

module.exports = (function (context, properties) {
  var labelText = (properties || {}).labelText;
  var forId = (properties || {}).forId || '';

  var optionsFlatRendered = '';
  ((properties || {}).options || []).forEach(function (optionProperties, index) {
    var isChecked = index === 0;
    var inputId = forId + '-' + optionProperties.value;

    var displayElement;
    if (optionProperties.name) {
      var name = optionProperties.name;
      displayElement = label(context, { className: liLabelClassName, forId: inputId, text: name });
    } else if (optionProperties.image) {
      var imageSource = optionProperties.image;
      var alt = optionProperties.alt;
      displayElement = label(context, { className: liLabelClassName, forId: inputId }, 
        image(context, { className: liImageClassName, imageSource: imageSource, alt: alt }));
    } else {
      displayElement = '';
    }

    optionsFlatRendered += li(context, { className: liClassName }, 
      input(context, { className: inputClassName, type: 'radio', checked: isChecked, name: forId, id: inputId, value: optionProperties.value })+
      displayElement);
  });

  return container(context, {},
    label(context, { className: labelClassName, forId: forId, text: labelText  })+
    ul(context, { className: ulClassName }, optionsFlatRendered));
});
