/* istanbul ignore next */

module.exports = (function () {
  var browser = require('./framework/browser');
  
  var context = require('./framework/context')({
    locale: browser.queryParameter.get(browser.queryParameter.name.lang),
  });

  context.usecases = require('./usecases')();
  
  require('./ui/routes')(context).render();
})();
