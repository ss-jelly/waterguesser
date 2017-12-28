
var html = require('../html');

module.exports = (function (context) {
  context.renderOnDocument = function (renderView) {
    html.element.set.innerHtml(html.element.find.single.by.id('app'), renderView(context));
  };

  return context;
});
