
module.exports = (function (context, properties) {
  var output = '<input ';

  var className = (properties || {}).className;
  if (className) {
    output += 'class="'+className+'" ';
  }
  
  var type = (properties || {}).type;
  if (type) {
    output += 'type="'+type+'" ';
  }
  
  var name = (properties || {}).name;
  if (name) {
    output += 'name="'+name+'" ';
  }
  
  var id = (properties || {}).id;
  if (id) {
    output += 'id="'+id+'" ';
  }
  
  var minimum = (properties || {}).minimum;
  if (minimum) {
    output += 'min="'+minimum+'" ';
  }
  
  var maximum = '' + (properties || {}).maximum;
  if (maximum) {
    output += 'max="'+maximum+'" ';
  }
  
  var value = '' + (properties || {}).value;
  if (value) {
    output += 'value="'+value+'" ';
  }

  output += '>';

  return output;
});
