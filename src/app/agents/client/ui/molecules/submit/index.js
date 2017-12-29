
var container = require('../../atoms/container');
var button = require('../../atoms/button');

require('./style.css');

var moduleName = 'molecules-submit';

module.exports = (function (context, properties) {
  var className = (properties || {}).className;
  var label = (properties || {}).label;
  return container(context, { className: moduleName }, 
    button(context, { label: context.resources.strings.estimate }));
});
