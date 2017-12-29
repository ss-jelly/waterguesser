
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

var eyeColors = {
  brown: 'brown',
  grey: 'grey',
  green: 'green',
  blue: 'blue',
  kehribar: 'kehribar',
  ela: 'ela',
};

var facialHairs = {
  stubble: 'stubble',
  moustache: 'moustache',
  goatee: 'goatee',
  beard: 'beard',
};

var bodyTypes = {
  average: 'average',
  muscular: 'muscular',
  overweight: 'overweight',
};

module.exports = ({
  defaults: {
    age: 18,
    height: 170,
    hairColor: hairColors.black,
    hairLength: hairLengths.long,
    eyeColor: eyeColors.brown,
    facialHair: facialHairs.stubble,
    bodyType: bodyTypes.overweight,
  },

  hairColors: hairColors,
  hairLengths: hairLengths,
  eyeColors: eyeColors,
  facialHairs: facialHairs,
  bodyTypes: bodyTypes,
});
