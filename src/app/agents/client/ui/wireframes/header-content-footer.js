
var container = require('../atoms/container');

var moduleName = 'wireframes-header-content-footer';

var renderBlank = function () { return ''; };

module.exports = function (context, properties, children) {
  var header = (properties || {}).header || renderBlank;
  var content = (properties || {}).content || renderBlank;
  var footer = (properties || {}).footer || renderBlank;
  return container(context, { className: moduleName },
    header(context)+ 
    content(context)+ 
    footer(context));
};
