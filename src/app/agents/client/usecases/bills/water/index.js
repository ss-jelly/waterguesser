
var createEstimateUsecase = require('./estimate');

module.exports = (function () {
  var estimate = createEstimateUsecase();

  return ({
    estimate: estimate,
  });
});
