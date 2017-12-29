
module.exports = {
  localizationCode: 'osm',
  rightToLeft: true,

  homePageTitle: 'صو فوترة طحمن جی',

  calculating: 'إش لن یور',

  waterBillEstimatedCostPreamble: 'صو فوترة سی ك',
  waterBillEstimatedCostPostamble: 'طحمن عت یور',

  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('AR') + ' ' + 'آقچه';
  },
};
