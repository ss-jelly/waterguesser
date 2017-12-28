
var html = require('../../../framework/html');

var view = require('./view');

var onPageEnter = function (context) {
  html.set.title(context.resources.strings.homePageTitle);
};

module.exports = function (context) {
  context.router.on(function () {
    context.renderOnDocument(view);
  }, {
    after: function () {
      onPageEnter(context);
    },
  });
};
