
var container = require('../../atoms/container');
var textDirection = require('../../atoms/text-direction');

require('./style.css');

var moduleName = 'wireframes-header-content-footer';

var contentContainerContainerClassName = 'wireframes-header-content-footer-content-container-container';
var contentContainerClassName = 'wireframes-header-content-footer-content-container';

var renderBlank = function () { return ''; };

module.exports = function (context, properties, children) {
  var header = (properties || {}).header || renderBlank;
  var content = (properties || {}).content || renderBlank;
  var footer = (properties || {}).footer || renderBlank;
  return textDirection(context, {}, 
    header(context)+ 
    container(context, { className: contentContainerContainerClassName }, 
      container(context, { className: contentContainerClassName }, content(context)))+ 
    footer(context));
};
