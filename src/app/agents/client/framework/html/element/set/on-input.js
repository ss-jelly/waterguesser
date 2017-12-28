
module.exports = (function (element, callback) {
  (element || {}).oninput = callback;
});
