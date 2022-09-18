// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/*
input: array of nums and chunk size
return: an array of subarrays - will contain elements from original array
    but in chunks of the specified amount
    -example: array: [1, 2, 3, 4], chunk: 2 --> [[ 1, 2], [3, 4]]
    - any odd amount of elements will result in a subarr with 1 element

edges:
    - empty input array
    - chunk size of 0
    - chunk size greater then initial array size

plan of attack:
    - initialize new outer array: outer = []
    - initialize sub array
    - iterate through input array
        - push to subarray each ele
        -when subarray.length = chunk size, push subarray into outer and reset to []
Time: O(n)
Space: O(n)
*/

function chunk(array, size) {
    // let outer = []
    // let subarray = []

    // for (let i = 0; i < array.length; i++) {

    //     let lastEle = i === array.length-1
    //     let current = array[i]
    //     subarray.push(current)

    //     if (subarray.length === size || lastEle) {
    //         outer.push(subarray)
    //         subarray = []
    //     }
    // };

    // return outer

    let outer = []
    let index = 0
    while (index < array.length) {
        outer.push(array.slice(index, index + size))
        index += size
    }

    return outer

}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
module.exports = chunk;
