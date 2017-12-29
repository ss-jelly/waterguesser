
module.exports = (function (context, properties, children) {
  var className = (properties || {}).className || '';
  var id = (properties || {}).id || '';
  var name = (properties || {}).name || 0;
  return '<select class="'+className+'" id="'+id+'" name="'+name+'">'+children+'</select>';
});
