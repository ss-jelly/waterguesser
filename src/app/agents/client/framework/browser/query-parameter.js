
module.exports = {
  name: {
    lang: 'lang',
    age: 'age',
    height: 'height',
    hairColor: 'hairColor',
    hairLength: 'hairLength',
  },
  get: function (parameterName) {
    parameterName = parameterName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + parameterName + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
};
