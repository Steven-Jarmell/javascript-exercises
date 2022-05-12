const reverseString = function(toReverse) {
    if (toReverse.length == 0) {
        return '';
    }
    let splitString = toReverse.split('');
    splitString.reverse();
    return splitString.join('');
};

// Do not edit below this line
module.exports = reverseString;
