const sumAll = function(firstInteger, secondInteger) {
    if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) return "ERROR";
    if (firstInteger < 0 || secondInteger < 0) {
        return 'ERROR';
    }
    
    let endNumber = Math.max(firstInteger, secondInteger);
    let startNumber = Math.min(firstInteger, secondInteger);

    let count = 0;
    for (let i = startNumber; i < endNumber+1; i++) {
        count += i;
    }

    return count;
};

// Do not edit below this line
module.exports = sumAll;
