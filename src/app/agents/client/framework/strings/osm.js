
module.exports = {
  localizationCode: 'osm',
  rightToLeft: true,

  homePageTitle: 'صو فوترة طحمن جی',

  calculating: 'إش لن یور',

  waterBillEstimatedCostPreamble: 'صو فوترة سی ك',
  waterBillEstimatedCostPostamble: 'طحمن عت یور',

  theirAgeQuestion: 'یاشی',
  theirHeightQuestion: 'بویی',
  theirHairColorQuestion: 'صچ رګی',
  theirHairLengthQuestion: 'صچ وزون لغی',
  theirEyeColorQuestion: 'گۉٍز رګی',
  theirFacialHairQuestion: 'صقل یشی',
  theirBodyTypeQuestion: 'وۇجودو',

  estimate: 'طحمین عت بق لم',

  black: 'سیاه',
  blonde: 'صری',
  brown: 'قهوه',
  red: 'قرمزی',
  grey: 'بۉز',

  green: 'یشیل',
  blue: 'ماؤی',
  ela: 'هلا',
  kehribar: 'کهریبار',

  long: 'وزون',
  middle: 'ۉرتة',
  short: 'قصة',
  bald: 'کل',

  stubble: 'خفیف',
  moustache: 'بیق لئ',
  goatee: 'چنه صقل لئ',
  beard: 'صقل',

  average: 'صرا دګ',
  muscular: 'قص لئ',
  overweight: 'ششقۉ',

  formatCurrency: function (moneyAmount) {
    return (moneyAmount || 0).toLocaleString('AR') + ' ' + 'آقچه';
  },
  formatNumber: function (number) {
    return (number || 0).toLocaleString('AR');
  },
};
