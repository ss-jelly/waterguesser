
require('./style.css');

var moduleName = 'atoms-text-direction';

module.exports = (function (context, properties, children) {
  var className = moduleName;
  if (context.resources.strings.rightToLeft === true) {
    className += '-rtl';
  } else {
    className += '-ltr';
  }
  return '<div class="'+className+'">'+children+'</div>';
});
