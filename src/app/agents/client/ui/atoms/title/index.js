
require('./style.css');

var moduleName = 'atoms-title';

module.exports = function (context, properties, children) {
  var className = (properties || {}).className;
  var id = (properties || {}).id;
  var text = (properties || {}).text;
  return '<h1 class="'+moduleName+' '+className+'" id="'+id+'">'+text+'</h1>';
};
