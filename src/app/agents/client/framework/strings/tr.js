
module.exports = {
  localizationCode: 'tr',
  rightToLeft: false,

  homePageTitle: 'Su Fatura Tahminci',

  calculating: 'İşleniyor...',
  
  waterBillEstimatedCostPreamble: 'Su faturasını',
  waterBillEstimatedCostPostamble: 'tahmin ediyor',

  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('tr', { style: 'currency', currency: 'TRY' });
  },
};
