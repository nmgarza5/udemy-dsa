// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
input: integer (n)
return: nested array -> n x n spiral, clockwise

plan of attack:
    - create empty results array
    - create counter = 1
    - create startRow, endRow, startCol, endCol
    - while (start col <= end col) && (start row <= end row)
        - loop from start column to end column
            - at results[start row][i] = counter
            - increment counter
        - increment start row
        - loop from start row to end row
            - at results[i][end column] = counter
            - increment counter
        - decrement end col
        - loop from end col to start col
            - at results[end row][i] = counter
            - increment counter
        - decrement end row
        - loop from end row to start row + 1
            - at results[start col][i] = counter
            - increment counter
*/

function matrix(n) {

    //create results array with appropriate number of row
    const results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    // console.log(results)

    // create variables
    let counter = 1,
        startRow = 0,
        endRow = results.length-1,
        startCol = 0,
        endCol = n - 1

    // while (counter <= 10) {
    while (startCol <= endCol && startRow <= endRow) {
        // fill top side and increment startRow
        for (let i = startCol; i <= endCol; i ++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++

        // fill right side and decrement endCol
        for (let i = startRow; i <= endRow; i ++) {
            results[i][endCol]= counter
            counter++
        }
        endCol--

        // fill bottom side and decrement endRow
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i]= counter
            counter++
        }
        endRow--

        // fill left side and increment startCol
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol]= counter
            counter++
        }
        startCol++


        // - loop from end row to start row + 1
        // - at results[start col][i] = counter
        // - increment counter

    }

    return results
}
 console.log(matrix(4))
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
module.exports = matrix;
