
module.exports = function (context) {
  context.state = {};

  context.setState = function (state) {
    context.state = state || {};
  };

  return context;
};
