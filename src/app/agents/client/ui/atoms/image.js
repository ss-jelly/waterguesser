
module.exports = function (context, properties, children) {
  var output = '<img ';

  var className = (properties || {}).className;
  if (className) {
    output += 'class="'+className+'" ';
  }
  
  var imageSource = (properties || {}).imageSource;
  if (imageSource) {
    output += 'src="'+imageSource+'" ';
  }
  
  var imageWidth = (properties || {}).imageWidth;
  if (imageWidth) {
    output += 'width="'+imageWidth+'" ';
  }
  
  var alt = (properties || {}).alt;
  if (alt) {
    output += 'alt="'+alt+'" ';
  }
  
  output += '/>';

  return output;
};
