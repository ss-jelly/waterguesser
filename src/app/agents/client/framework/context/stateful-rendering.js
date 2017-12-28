
var deepEqual = require('deep-equal');

module.exports = function (context) {
  if (!context.router || !context.flushRouterState) {
    throw new ReferenceError('Router functionality should already exist');
  }

  context.render = /* istanbul ignore next */ function () {
    context.flushRouterState();
    context.router.resolve();
  };

  var setStateParent = context.setState;

  if (!setStateParent) {
    throw new ReferenceError('State functionality needs to already have been configured');
  }

  context.setState = function (newState) {
    var oldState = context.state;
    setStateParent(newState);
    if (deepEqual(oldState, newState) !== true) {
      context.render();
    }
  };

  return context;
};
