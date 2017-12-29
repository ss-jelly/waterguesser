
var bindHomePage = require('./pages/home/route');
var bindNotFoundPage = require('./pages/not-found/route');
var bindResultPage = require('./pages/result/route');

module.exports = function (context) {
  bindHomePage(context);
  bindNotFoundPage(context);
  bindResultPage(context);

  return context;
};
