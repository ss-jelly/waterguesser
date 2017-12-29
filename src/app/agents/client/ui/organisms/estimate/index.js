
var loc = require('./loc');

var getPropsFromContext = function (context) {
  var text;
  if (context.state.hasOwnProperty('estimatedWaterBillCost') === true) {
    text = context.resources.strings.waterBillEstimatedCostPreamble + ' ' +
      context.resources.strings.formatCurrency(
        context.state.estimatedWaterBillCost) + ' ' +
      context.resources.strings.waterBillEstimatedCostPostamble;
  } else {
    text = context.resources.strings.calculating;
  }

  return ({
    text: text,
  });
};

module.exports = function (context, properties, children) {
  return loc(context, Object.assign({}, properties, getPropsFromContext(context)), children);
};
