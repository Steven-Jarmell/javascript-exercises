const getTheTitles = function(array) {
    let toReturn = [];
    for (let i = 0; i < array.length; i++) {
        toReturn.push(array[i].title);
    }
    return toReturn;
};

// Do not edit below this line
module.exports = getTheTitles;
