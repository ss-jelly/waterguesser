
module.exports = (function (context, properties, children) {
  var className = (properties || {}).className || '';
  var forId = (properties || {}).forId || '';
  var text = (properties || {}).text || '';

  return '<label class="'+className+'" for="'+forId+'">'+text+(children || '')+'</label>';
});
