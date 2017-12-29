
module.exports = {
  localizationCode: 'tr',
  rightToLeft: false,

  homePageTitle: 'Su Fatura Tahminci',

  calculating: 'İşleniyor...',
  
  waterBillEstimatedCostPreamble: 'Su faturasını',
  waterBillEstimatedCostPostamble: 'tahmin ediyor',

  theirAgeQuestion: 'Yaşı',
  theirHeightQuestion: 'Boyu',
  theirHairColorQuestion: 'Saç rengi',
  theirHairLengthQuestion: 'Saç uzunlugu',
  theirEyeColorQuestion: 'Göz rengi',
  theirFacialHairQuestion: 'Sakal işi',
  
  estimate: 'tahmin et bakalım',
  
  black: 'Siyah',
  blonde: 'Sarı',
  brown: 'Kahverengi',
  red: 'Kırmızı',
  grey: 'Boz',

  green: 'Yeşil',
  blue: 'Mavi',
  ela: 'Ela',
  kehribar: 'Kehribar',

  long: 'Uzun',
  middle: 'Orta',
  short: 'Kısa',
  bald: 'Kel',

  stubble: 'Hafif',
  moustache: 'Bıyıklı',
  goatee: 'Çene sakalı',
  beard: 'Sakalı',

  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('tr', { style: 'currency', currency: 'TRY' });
  },
  formatNumber: function (number) {
    return (number || 0).toLocaleString('tr');
  },
};
