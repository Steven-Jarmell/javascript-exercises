const findTheOldest = function(array) {
    // Iterate through the array and reduce each person to their age, maintaining the oldest in the array to return
    let newArr = array.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return (oldestAge < currentAge) ? current : oldest;
    });

    return newArr;
};

const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death-birth;
}
// Do not edit below this line
module.exports = findTheOldest;
