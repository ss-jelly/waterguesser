
var browser = require('../../../framework/browser');
var html = require('../../../framework/html');

var view = require('./view');

var onPageEnter = function (context) {
  html.set.title(context.resources.strings.homePageTitle);

  context.usecases.bills.water.estimate.run({
    age: parseInt(browser.queryParameter.get(browser.queryParameter.name.age)),
    height: parseInt(browser.queryParameter.get(browser.queryParameter.name.height)),
    hairColor: browser.queryParameter.get(browser.queryParameter.name.hairColor),
    hairLength: browser.queryParameter.get(browser.queryParameter.name.hairLength),
    eyeColor: browser.queryParameter.get(browser.queryParameter.name.eyeColor),
  }).then(function (result) {
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
