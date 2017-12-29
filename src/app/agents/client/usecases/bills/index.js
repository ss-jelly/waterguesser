
var createWaterBillsUsecases = require('./water');

module.exports = (function () {
  var water = createWaterBillsUsecases();

  return ({
    water: water,
  });
});
