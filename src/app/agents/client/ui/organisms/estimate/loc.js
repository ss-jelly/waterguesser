
var title = require('../../atoms/title');

require('./style.css');

var moduleName = 'molecules-result-title';

module.exports = function (context, properties, children) {
  var text = (properties || {}).text;
  return title(context, { className: moduleName, id: moduleName, text: text});
};
