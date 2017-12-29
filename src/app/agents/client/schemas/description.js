
var hairColors = {
  brown: 'brown',
  blonde: 'blonde',
  black: 'black',
  red: 'red',
  grey: 'grey',
};

module.exports = ({
  defaults: {
    age: 18,
    height: 170,
    hairColor: hairColors.black,
  },

  hairColors: hairColors,
});
