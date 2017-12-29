
var createBillsUsecases = require('./bills');

module.exports = (function () {
  var bills = createBillsUsecases();
  
  return ({
    bills: bills,
  });
});