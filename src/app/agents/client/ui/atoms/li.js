
module.exports = function (context, properties, children) {
  var className = (properties || {}).className;
  return '<li class="'+className+'">'+children+'</li>';
};
