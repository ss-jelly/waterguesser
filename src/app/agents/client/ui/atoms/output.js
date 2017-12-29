
module.exports = (function (context, properties) {
  var className = (properties || {}).className || '';
  var forId = (properties || {}).type || '';
  var id = (properties || {}).id || '';
  var value = (properties || {}).value || 0;
  return '<output class="'+className+'" for="'+forId+'" id="'+id+'">'+value+'</output>';
});
