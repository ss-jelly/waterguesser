
var hairColors = {
  brown: 'brown',
  blonde: 'blonde',
  black: 'black',
  red: 'red',
  grey: 'grey',
};

var hairLengths = {
  long: 'long',
  middle: 'middle',
  short: 'short',
  bald: 'bald',
};

module.exports = ({
  defaults: {
    age: 18,
    height: 170,
    hairColor: hairColors.black,
    hairLength: hairLengths.long,
  },

  hairColors: hairColors,
  hairLengths: hairLengths,
});
