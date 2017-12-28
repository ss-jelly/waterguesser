
var Navigo = require('navigo');

module.exports = function (context) {
  /* istanbul ignore next */

  context.router = new Navigo(null);

  context.flushRouterState = /* istanbul ignore next */ function () {
    context.router._lastRouteResolved = null;
  };

  return context;
};
