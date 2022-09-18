// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ')
    let newArr = []
    arr.forEach(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        newArr.push(word)
    })
    return newArr.join(' ')

    // let arr = str.split(' ')
    // let sentence = arr.reduce((sentence, word) => {
    //     if (arr.indexOf(word) === arr.length - 1) {
    //         word = word.charAt(0).toUpperCase() + word.slice(1)
    //     } else {
    //         word = word.charAt(0).toUpperCase() + word.slice(1) + ' '
    //     }
    //     sentence += word
    //     return sentence
    // }, '')


    // return sentence

}
console.log(capitalize('a short sentence'))

module.exports = capitalize;
