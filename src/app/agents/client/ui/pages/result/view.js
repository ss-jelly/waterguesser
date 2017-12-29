
var wireframe = require('../../wireframes/header-content-footer');

var header = require('../../organisms/header');
var estimate = require('../../organisms/estimate');

module.exports = function (context, properties) {
  return wireframe(context, { header: header, content: estimate });
};
