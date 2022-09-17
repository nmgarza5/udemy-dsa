// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

/*
Input: integer n
return: series of console logs. print each number unless the following:
    - divisible by 3: fizz
    - divisibile by 5: buzz
    - divisibile by 3 and 5: fizzbuzz

plan of attack:
    - intitialize counter = 1
    - while loop counter <= n
    - if (n % 3 === 0) fizz
    - else if (n % 5 === 0) buzz
    - else if (n % 5 === 0 && n % 3 === 0) fizzbuzz
    - else: n

    Time: O(n)
    Space: O(n)
*/

function fizzBuzz(n) {
    let counter = 1;
    while (counter <= n) {

        let three = counter % 3 === 0,
            five = counter % 5 === 0;
        // if (three && five) console.log('fizzbuzz')
        // else if (three) console.log('fizz')
        // else if (five) console.log('buzz')
        // else console.log(counter)

        //ternary operator
        three && five ? console.log('fizzbuzz')
        : three ? console.log('fizz')
        : five ? console.log('buzz')
        : console.log(counter)

        counter++
    }
}
fizzBuzz(15);
module.exports = fizzBuzz;
