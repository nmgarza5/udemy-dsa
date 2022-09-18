// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/*
input: two strings
return: true or false if anagaram

constraints:
    - only account for alphanumeric chars. no special characters or whitespace
    - capitalization does not matter

plan of attack:
    - initialize two hash maps: hash 1 and hash 2
    - map chars and occurences for each string
    - iterate over one hashmap checking if the occurences match the second hash map
        - if not -> return false
    - if we make it here, the strings are anagrams, return true

TIME: O(n+m)
SPACE: O(n+m)
*/


function anagrams(stringA, stringB) {
    let hashmap = {}
    let reg = /[^\w]/g

    let newStringA = stringA.replace(reg, '').toLowerCase()
    let newStringB = stringB.replace(reg, '').toLowerCase()

    for (let char of newStringA) {
        if (!hashmap[char]) hashmap[char] = 1
        else hashmap[char]++
    }

    for (let char of newStringB) {
        if (!hashmap[char]) return false
        else hashmap[char]--
    }

    return Object.values(hashmap).every(charCount => charCount === 0)

}

// const buildMap = (hashmap, string) => {
//     let reg = /[^\w]/g
//     let newString = string.replace(reg, '').toLowerCase()
//     for (let char of newString) {
//         if (!hashmap[char]) hashmap[char] = 1
//         else hashmap[char]++
//     }
// }

// function anagrams(stringA, stringB) {
//     let hash1 = {},
//         hash2 = {}

//     buildMap(hash1, stringA)
//     buildMap(hash2, stringB)

//     let sameLength = Object.keys(hash1).length === Object.keys(hash2).length

//     for (let char in hash1) {
//         if (!sameLength || !hash2[char] || hash1[char] !== hash2[char]) return false
//     }

//     return true
// }
  console.log(anagrams('rail safety', 'fairy tales')) // --> True
  console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) // --> True
  console.log(anagrams('Hi there', 'Bye there')) // --> False
  console.log(anagrams('One one', 'One one c')) // --> False
module.exports = anagrams;
