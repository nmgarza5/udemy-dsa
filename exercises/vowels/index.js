// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
input: string
return: integer -> indicated numer of vowels used in the string

plan of attack:
    - initialize vowel hashmap
    - initialize count = 0
    - iterate O to n (str.length)
        - if (hashMap[str[i]]) count ++
    return count
*/

function vowels(str) {
    let vowels = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u'
    }
    let count = 0
    for (let char of str) {
        if (vowels[char]) count++
    }
    return count
}

// USING REDUCE.
// function vowels(str) {
//     let vowels = {
//         'a': 'a',
//         'e': 'e',
//         'i': 'i',
//         'o': 'o',
//         'u': 'u'
//     }
//     return str.split('').reduce((total, char) => {
//         if (vowels[char]) total++
//         return total
//     }, 0)
// }
console.log(vowels('Why do you ask?')) //--> 4
module.exports = vowels;
