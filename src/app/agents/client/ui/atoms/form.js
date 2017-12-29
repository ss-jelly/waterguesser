
module.exports = (function (context, properties, children) {
  var action = (properties || {}).action || '';
  return '<form class="form" action="'+action+'" method="get">'+children || ''+'</form>';
});
