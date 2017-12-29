
module.exports = (function () {
  var defaultDescription = {
    age: 18,
  };

  var ageCoefficient = 0.5;

  var run = function (description) {
    description = description || {};

    var estimatedBill = 0;
    
    estimatedBill += (description.age || defaultDescription.age) * ageCoefficient;

    return Promise.resolve(Math.floor(estimatedBill));
  };

  return ({
    run: run,
  });
});
