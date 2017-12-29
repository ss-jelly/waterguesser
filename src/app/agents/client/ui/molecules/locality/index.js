
var container = require('../../atoms/container');

var link = require('./link');

require('./style.css');

var moduleName = 'molecules-locality';

module.exports = function (context, properties, children) {
  return container(context, { className: moduleName }, 
    link(context, { linkSource: '/?lang=tr', imageSource: context.resources.images.flag.tr })+
    link(context, { linkSource: '/?lang=en', imageSource: context.resources.images.flag.en })+
    link(context, { linkSource: '/?lang=osm', imageSource: context.resources.images.flag.osm }));
};
