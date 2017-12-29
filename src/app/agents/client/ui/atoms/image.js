
module.exports = function (context, properties, children) {
  var className = (properties || {}).className;
  var imageSource = (properties || {}).imageSource;
  var imageWidth = (properties || {}).imageWidth;
  return '<img class="'+className+'" src="'+imageSource+'" width="'+imageWidth+'"/>';
};
