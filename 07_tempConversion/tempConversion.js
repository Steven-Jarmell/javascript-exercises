const ftoc = function(degreesF) {
  let degreesCelsius = (degreesF - 32) * (5/9);

  return (Math.round(degreesCelsius * 10) / 10);
};

const ctof = function(degreesC) {
  let degreesFahrenheit = degreesC * (9/5) + 32;

  return (Math.round(degreesFahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
