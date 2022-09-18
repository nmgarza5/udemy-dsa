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


function pyramid(n) {
    let level = '#'
    let space = ' '

    for (let i = 1; i < n; i++) {
        if (i < n) level = space + level + space
    }
    for (let i = 0; i < n; i++) {
        if (i === 0) console.log(level)
        else {
            let middle = Math.round(level.length / 2)
            level = level.slice(1, middle) + '##' + level.slice(middle, level.length-1)
            console.log(level)
        }
    }
}
pyramid(1)
pyramid(2)
pyramid(5)
module.exports = pyramid;
