// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// input: integer
// return: integer -> reverse of input, 123 -> 321

// easy: turn to string, reverse, and then turn back into int




function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''))




}

console.log(reverseInt(51))

module.exports = reverseInt;
