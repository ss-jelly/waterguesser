
module.exports = {
  localizationCode: 'en',
  rightToLeft: false,

  homePageTitle: 'Water Bill Estimator',

  calculating: 'Estimating...',

  waterBillEstimatedCostPreamble: 'Estimated water bill: ',
  waterBillEstimatedCostPostamble: '',

  theirAgeQuestion: 'Age',
  theirHeightQuestion: 'Height',
  theirHairColorQuestion: 'Hair Color',
  theirHairLengthQuestion: 'Hair Length',

  estimate: 'estimate',

  black: 'Black',
  blonde: 'Blonde',
  brown: 'Brown',
  red: 'Red',
  grey: 'Grey',

  long: 'Long',
  middle: 'Middle',
  short: 'Short',
  bald: 'Bald',

  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
  },
  formatNumber: function (number) {
    return (number || 0).toLocaleString('en-GB');
  },
};
