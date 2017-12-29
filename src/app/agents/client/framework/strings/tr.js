
module.exports = {
  localizationCode: 'tr',
  rightToLeft: false,

  homePageTitle: 'Su Fatura Tahminci',

  calculating: 'İşleniyor...',
  
  waterBillEstimatedCostPreamble: 'Su faturasını',
  waterBillEstimatedCostPostamble: 'tahmin ediyor',

  theirAgeQuestion: 'Yaşı',
  theirHeightQuestion: 'Boyu',
  
  estimate: 'tahmin et bakalım',
  
  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('tr', { style: 'currency', currency: 'TRY' });
  },
  formatNumber: function (number) {
    return (number || 0).toLocaleString('tr');
  },
};
