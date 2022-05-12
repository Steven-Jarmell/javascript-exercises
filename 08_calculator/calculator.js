const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count;
};

const multiply = function(array) {
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    count *= array[i];
  }
  return count;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  let count = 1;
  for (let i = a; i > 0; i--) {
    count *= i;
  }
  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
