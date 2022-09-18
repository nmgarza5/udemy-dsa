// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

/*

input: positive integer indicating pyramid height

return: series of console.logs depicting a pyramid

-plan of attack
    - initialize level  = '#'
    - intialize space = '_'

    - iterate O to n - build first level
        - if (i < n)
            - level = space + level + space
    - iterate 0 to n - build remaining levels and print each
        - if (i === 0) console.log(level)
        - initialize middle index = Math.round(level.length / 2)
        - level = level.slice(1, middle) + '##' + level.slice(middle, level.length-1)
        console.log(level)

*/

// INITIAL SOLUTION
// function pyramid(n) {
//     let level = '#'
//     let space = ' '

//     for (let i = 1; i < n; i++) {
//         if (i < n) level = space + level + space
//     }
//     for (let i = 0; i < n; i++) {
//         if (i === 0) console.log(level)
//         else {
//             let middle = Math.round(level.length / 2)
//             level = level.slice(1, middle) + '##' + level.slice(middle, level.length-1)
//             console.log(level)
//         }
//     }
// }

// // UDEMY ITERATIVE SOLUTION
// function pyramid(n) {
//     let midPoint = Math.floor((2 * n - 1) / 2)
//     for (let row = 0; row < n; row++) {
//         let level = ''

//         for (let col = 0; col < (n*2) - 1; col++) {
//             if (col >= midPoint - row && col <= midPoint + row) level += '#'
//             else level += ' '
//         }
//         console.log(level)
//     }
// }


// UDEMY RECURSIVE SOLUTION
function pyramid(n, row = 0, level = '') {
    let midPoint = Math.floor((2 * n - 1) / 2)
    let col = level.length
    if (n === row) return

    // case to print each row and reset how the level is built
    if (n * 2 - 1 === col) {
        console.log(level)
        return pyramid(n, row + 1);
    }

    // if the above to cases are not hit, continue to build the stair
    if (col >= midPoint - row && col <= midPoint + row) level += '#'
    else level += ' '
    pyramid(n, row, level);
}


// pyramid(1)
pyramid(3)
// pyramid(5)
module.exports = pyramid;
