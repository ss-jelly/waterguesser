
var html = require('../../../framework/html');

var view = require('../home/view');

var onPageEnter = function (context) {
  html.set.title(context.resources.strings.homePageTitle);
};

module.exports = function (context) {
  context.router.notFound(function () {
    context.renderOnDocument(view);
  }, {
    after: function () {
      onPageEnter(context);
    },
  });
};
