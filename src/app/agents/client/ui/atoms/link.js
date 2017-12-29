
module.exports = function (context, properties, children) {
  var className = (properties || {}).className;
  var source = (properties || {}).source;
  return '<a class="'+className+'" href="'+source+'">'+children+'</a>';
};