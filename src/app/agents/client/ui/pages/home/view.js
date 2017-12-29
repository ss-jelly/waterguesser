
var wireframe = require('../../wireframes/header-content-footer');

var header = require('../../organisms/header');

module.exports = function (context, properties) {
  return wireframe(context, { header: header });
};
