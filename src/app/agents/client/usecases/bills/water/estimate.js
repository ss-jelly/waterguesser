
module.exports = (function () {
  var defaultDescription = {
    age: 18,
    height: 170,
  };

  var ageCoefficient = 0.5;
  var heightCoefficient= 0.25;

  var run = function (description) {
    description = description || {};

    var estimatedBill = 0;
    
    estimatedBill += (description.age || defaultDescription.age) * ageCoefficient;
    estimatedBill += (description.height || defaultDescription.height) * heightCoefficient;

    return Promise.resolve(Math.floor(estimatedBill));
  };

  return ({
    run: run,
  });
});
