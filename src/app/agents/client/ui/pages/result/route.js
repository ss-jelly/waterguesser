
var html = require('../../../framework/html');

var view = require('./view');

var onPageEnter = function (context) {
  html.set.title(context.resources.strings.homePageTitle);

  context.usecases.bills.water.estimate.run().then(function (result) {
    context.setState({
      estimatedWaterBillCost: result,
    });
  });
};

module.exports = function (context) {
  context.router.on('/result', function () {
    context.renderOnDocument(view);
  }, {
    after: function () {
      onPageEnter(context);
    },
  });
};
