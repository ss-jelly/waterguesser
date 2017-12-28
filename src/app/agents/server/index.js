/* istanbul ignore next */

(function () {
  var express = require('express');
  var app = express();
  var path = require('path');
  
  app.set('port', (process.env.PORT || 8080));
  app.use(express.static(path.join(__dirname, '../../../../dist')));
  
  app.get('*', function(req, res) {
    res.sendfile(path.join(__dirname, '../../../../dist/index.html'));
  });
  
  app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'));
  });  
})();