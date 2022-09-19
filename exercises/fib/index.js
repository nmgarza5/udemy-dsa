// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const { memoize } = require("lodash")

/*
input: integer n
return: integer nth number of fibonacci series

notes:
next = curr + prev


*/

// ITERATIVE
// function fib(n) {
//     let current = 1
//     let prev = 0;
//     for (let i = 1; i < n; i++) {
//         let next = current + prev
//         prev = current
//         current = next
//     }
//     return current
// }

// RECURSIVE - my solution
// function fib(n, count = 1, current = 1, prev = 0) {
//     if (count === n) return current
//     let next = current + prev
//     count++

//     return fib(n, count, next, current)
// }

// COMMON RECURSIVE SOLUTION - close to exponential complexity
//      which is really bad. if you give this solution, make sure
//      you say so. When they say how can it be improved, you must
//      say:
//      !!!!!!!!!! MEMOIZATION!!!!!!!
//      - memoization: is the act of storing the argument(s) and return value(s)
//          for a given function. if we see those inputs again, do not run the function,
//          just take the return result
const memoizer = (fn) => {
    const cache = {};
    return function(...args) {
        if (cache[args]) return cache[args]
        let result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function fib(n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

const fastFib = memoizer(fib)

// console.log(fib(4))
console.log(fastFib(9))
module.exports = fib;
