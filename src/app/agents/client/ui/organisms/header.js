
var container = require('../atoms/container');

var locality = require('../molecules/locality');

module.exports = function (context) {
  return container(context, {}, 
    locality(context));
};
