
var bindHomePage = require('./pages/home/route');
var bindNotFoundPage = require('./pages/not-found/route');

module.exports = function (context) {
  bindHomePage(context);
  bindNotFoundPage(context);

  return context;
};
