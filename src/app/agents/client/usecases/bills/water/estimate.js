
var descriptionSchema = require('../../../schemas/description');

module.exports = (function () {
  var ageContribution = function (description) {
    var ageCoefficient = 0.5;
    return (description.age || descriptionSchema.defaults.age) * ageCoefficient;
  };

  var heightContribution = function (description) {
    var heightCoefficient = 0.25;
    return (description.height || descriptionSchema.defaults.height) * heightCoefficient;
  };

  var hairColorContribution = function (description) {
    switch(description.hairColor || descriptionSchema.defaults.hairColor) {
    case descriptionSchema.hairColors.blonde:
      return 2;
    case descriptionSchema.hairColors.brown:
      return 3;
    case descriptionSchema.hairColors.grey:
      return 4;
    case descriptionSchema.hairColors.red:
      return 5;
    case descriptionSchema.hairColors.black:
    default:
      return 1;
    }
  };

  var hairLengthContribution = function (description) {
    switch(description.hairLength || descriptionSchema.defaults.hairLength) {
    case descriptionSchema.hairLengths.middle:
      return 2;
    case descriptionSchema.hairLengths.short:
      return 3;
    case descriptionSchema.hairLengths.bald:
      return 4;
    case descriptionSchema.hairLengths.long:
    default:
      return 1;
    }
  };

  var run = function (description) {
    description = description || {};

    var estimatedBill = 0;
    
    estimatedBill += ageContribution(description);
    estimatedBill += heightContribution(description);
    estimatedBill += hairColorContribution(description);
    estimatedBill += hairLengthContribution(description);

    return Promise.resolve(Math.floor(estimatedBill));
  };

  return ({
    run: run,
  });
});
