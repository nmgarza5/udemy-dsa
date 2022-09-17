// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


/*
input: string
return: most used char

edge cases:
    - empty string
    - there is a tie for most chars
    - not a string

plan of attack:
    - hashmap to store each char that is found
        - char: # of occurrences
        - hash = { "h": 1, "b": 5, etc...}
    - two iterations:
        - one to populate hashmap
            - if (!hash[char]) hash[char] = 1
            - else hash[char]++
        - one to find highest count
            max = ''

    Time: O(2n)
    Space: O(n)
*/

function maxChar(str) {
    let hash = {}
    let max;
    for (let char of str) {
        // if (!hash[char]) hash[char] = 1
        // else hash[char]++
        hash[char] = hash[char]++ || 1
    }
    for (let char in hash) {
        if (!hash[max] || hash[max] < hash[char]) max = char
    }
    return max
}

console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))

module.exports = maxChar;
