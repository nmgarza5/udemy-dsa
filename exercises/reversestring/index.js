// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /*
    input: string
    return: datatype: string


    action:
        1) initialize new string reversed as ''
        2) iterate through string backwards
        3) at each iteration add the current letter to reversed
        4) return reversed
    */
//    solution1
//    let reversedString = ''
//    for (let i = str.length-1; i >= 0; i--) {
//         let currentChar = str[i]
//         reversedString += currentChar
//  return reversedString
//    }

//    solution2
    // return str.split('').reverse().join('')

//    solution3
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
