
module.exports = (function (context, properties) {
  var value = (properties || {}).value || '';
  var name = (properties || {}).name || '';
  return '<option value="'+value+'">'+name+'</option>';
});
