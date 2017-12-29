
var wireframe = require('../../wireframes/header-content-footer');

var header = require('../../organisms/header');
var description = require('../../organisms/description');

module.exports = function (context, properties) {
  return wireframe(context, { header: header, content: description });
};
