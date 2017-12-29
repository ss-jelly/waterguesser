
module.exports = function (context, properties, children) {
  var className = (properties || {}).className;
  return '<ul class="'+className+'">'+children+'</ul>';
};
