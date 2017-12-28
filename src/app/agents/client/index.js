/* istanbul ignore next */

module.exports = (function () {
  var context = require('./framework/context');
  var browser = require('./framework/browser');
  
  var bindRoutes = require('./ui/routes');
  
  bindRoutes(context({
    locale: browser.queryParameter.get(browser.queryParameter.name.lang),
  })).render();
})();
