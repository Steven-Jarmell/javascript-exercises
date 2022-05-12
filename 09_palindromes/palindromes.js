const palindromes = function (string) {
    fixedString = string.toLowerCase().replace(/[^a-z]/g, "");
    for (let i = 0, j = fixedString.length-1; i < j; i++, j--) {
        if (fixedString[i] !== fixedString[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
