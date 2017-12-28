
var configureRouter = require('./router');
var configureRenderOnDocument = require('./render-on-document');
var configureResources = require('./resources');
var configureState = require('./state');
var configureStatefulRendering = require('./stateful-rendering');
var configureRenderHooks = require('./render-hooks');

module.exports = (function (options) {
  if (!options) {
    options = {};
  }

  var context = {};
  
  configureRouter(context);  
  configureRenderOnDocument(context);
  configureResources(context, options.locale);
  configureState(context);

  configureStatefulRendering(context);
  configureRenderHooks(context);

  return context;
});
