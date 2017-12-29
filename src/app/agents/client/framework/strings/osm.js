
module.exports = {
  localizationCode: 'osm',
  rightToLeft: true,

  homePageTitle: 'صو فوترة طحمن جی',

  calculating: 'إش لن یور',

  waterBillEstimatedCostPreamble: 'صو فوترة سی ك',
  waterBillEstimatedCostPostamble: 'طحمن عت یور',

  theirAgeQuestion: 'یاشی',

  estimate: 'طحمین عت بق لم',
  
  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('AR') + ' ' + 'آقچه';
  },
  formatNumber: function (number) {
    return (number || 0).toLocaleString('AR');
  },
};
