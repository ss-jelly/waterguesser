
module.exports = (function (context) {
  if (!context.render) {
    throw new ReferenceError('Rendering functionality should already exist');
  }

  context.renderHooks = {
    after: {
      chain: [],
      add: function (callback) {
        if (callback) {
          context.renderHooks.after.chain.push(callback);
        }
      },
      run: function () {
        context.renderHooks.after.chain.forEach(function (callback) {
          callback();
        });
        context.renderHooks.after.chain = [];
      },
    },
  };

  var parentRender = context.render;
  context.render = function () {
    parentRender();
    context.renderHooks.after.run();
  };
});
