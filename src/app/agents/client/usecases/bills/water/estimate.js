
module.exports = (function () {
  var run = function () {
    return Promise.resolve(0);
  };

  return ({
    run: run,
  });
});
