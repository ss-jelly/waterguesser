
var link = require('../../../atoms/link');
var image = require('../../../atoms/image');

require('./style.css');

var moduleName = 'molecule-locality-link';

var imageWidth = 32;

module.exports = function (context, properties, children) {
  var linkSource = (properties || {}).linkSource;
  var imageSource = (properties || {}).imageSource;
  return link(context, { className: moduleName, source: linkSource },
    image(context, { imageSource: imageSource, imageWidth: imageWidth }));
};
