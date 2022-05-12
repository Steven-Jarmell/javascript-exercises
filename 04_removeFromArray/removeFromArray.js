const removeFromArray = function(...args) {
    const array = args[0];
    const toReturn = [];

    // For each item in the array, add it to the return array unless it is to be excluded in the arguments
    array.forEach((item) => {
        if (!args.includes(item)) {
            toReturn.push(item);
        }
    });

    return toReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
