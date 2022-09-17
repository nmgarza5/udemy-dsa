// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // input: String
    // return: Boolean, indicating true for is palindrome
    // two methods:
        // 1) two pointers
                // - iterate through string
                // - one point at start, one at end
                // as we iterate through string, make sure pointers equal each other. if not return false
        // 2) stack
                // iterate through string and add to stack.
                // iterate through string backawards and pop from stack.
                // return stack.length === 0

    let left = 0
    let right = str.length-1

    console.log(str.split(''))

    for (i = 0; i < str.length; i++ ) {
        console.log(left, right, str[left], ' equals ', str[right], str[left] === str[right])

        if (str[left] !== str[right]) return false
        else {
            left++
            right--
        }
    }
    return true

}

console.log(palindrome('racecar'))
console.log(palindrome('Fish hsif '))

module.exports = palindrome;
