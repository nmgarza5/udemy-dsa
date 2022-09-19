// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example

const Queue = require('./queue');

/*
input: two queues
return: one joined queue

notes:
    - the queues will be joined in alternating order
    - should handle queues of different lengths. when one ends, no undefined is added
    - can only use class methods add, remove, peek

plan of attack:
    - create new queue = queue
    - while sourceOne.peek() or sourceTwo.peek() !== undefined
    - if sourceOne.peek()
            - queue.add(sourceOne.remove())
            - if sourceTwo.peek()
            - queue.add(sourceTwo.remove())
        -

*/

function weave(sourceOne, sourceTwo) {
    const queue = new Queue()

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) queue.add(sourceOne.remove())
        if (sourceTwo.peek()) queue.add(sourceTwo.remove())
    }

    return queue

}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
console.log('one:', queueOne, '\ntwo:', queueTwo)
const q = weave(queueOne, queueTwo);
console.log('weaved:', q)
q.remove() // 1
q.remove() // 'Hi'
q.remove() // 2
q.remove() // 'There'

module.exports = weave;
