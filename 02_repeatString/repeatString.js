const repeatString = function(string, iterations) {
    if (iterations < 0) {
        return 'ERROR';
    }
    let toReturn = '';
    for (let i = 0; i < iterations; i++) {
        toReturn += string;
    }
    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
