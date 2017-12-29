
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
  theirEyeColorQuestion: 'Eye Color',
  theirFacialHairQuestion: 'Facial Hair',
  theirBodyTypeQuestion: 'Body Type',

  estimate: 'estimate',

  black: 'Black',
  blonde: 'Blonde',
  brown: 'Brown',
  red: 'Red',
  grey: 'Grey',

  green: 'Green',
  blue: 'Blue',

  long: 'Long',
  middle: 'Middle',
  short: 'Short',
  bald: 'Bald',

  stubble: 'Stubble',
  moustache: 'Moustache',
  goatee: 'Goatee',
  beard: 'Beard',

  average: 'Average',
  muscular: 'Muscular',
  overweight: 'Overweight',

  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
  },
  formatNumber: function (number) {
    return (number || 0).toLocaleString('en-GB');
  },
};
