// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*
input: integer indicating number of steps
return: no return but console.log(each step)

constraints: must be spaces on the right side of #

plan of attack:
    - initialize statement = ' '*N
    - for loop
        statement = statement.slice(0, )


*/
// ITERATIVE
// function steps(n) {
    // let step = ''
    // for ( let i = 0; i < n; i ++) {
    //     step += ' '
    // }
    // for ( let i = 0; i < n; i ++) {
    //     step = step.slice(0, i) + '#' + step.slice(i + 1)
    //     console.log(step)
    // }
// }

// RECURSIVE
function steps(n, row = 0, stair = '') {
    // base case to end function
    if (n === row) return

    // case to print each row and reset how the stair is built
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1);
    }

    // if the above to cases are not hit, continue to build the stair
    if (stair.length <= row) stair += '#'
    else stair += ' '
    steps(n, row, stair);
}
// steps(4)
// steps(1)
// steps(30)
// steps(0)

module.exports = steps;
