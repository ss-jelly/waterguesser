
module.exports = (function (context, properties) {
  var className = (properties || {}).className || '';
  var forId = (properties || {}).forId || '';
  var text = (properties || {}).text || '';

  return '<label class="'+className+'" for="'+forId+'">'+text+'</label>';
});
