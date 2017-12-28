
module.exports = function (context, properties, children) {
  var className = (properties || {}).className;
  return '<div class="'+className+'">'+children+'</div>';
};
