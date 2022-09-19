// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.

const Stack = require('./stack');

/*
notes:
    - can only use two stacks and stack methods
    - will move values back and forth between stacks


    queue: [ 1, 2, 3, 4 ]
    main: [ 1, 2, 3, 4 ] side: []


plan of attack:
    - constructor:
        this.main = new Stack
        this.temp = new Stack

    - add(ele)
        - add to the back of the queue
        - main.add() push on to main

    - remove()
        - remove from the front of the queue
        - loop over main
            - temp.add(main.remove()) -> add the last ele in main to temp
        - create value = temp.remove() -> remove the first element in the queue
        - loop over temp
            - main.add(temp.remove()) -> add everything back to main

    -peek()
        - return the last elemement in the queue
        - return main.peek()

*/

class Queue {
    constructor() {
        this.main = new Stack()
        this.temp = new Stack()
    }

    add(ele) {
        return this.main.push(ele)
    }

    remove() {
        while (this.main.peek()) {
            this.temp.push(this.main.pop())
        }

        let first = this.temp.pop()

        while (this.temp.length) {
            this.main.push(this.temp.pop())
        }
        return first
    }

    peek() {
        while (this.main.peek()) {
            this.temp.push(this.main.pop())
        }

        let peek = this.temp.peek()

        while (this.temp.length) {
            this.main.push(this.temp.pop())
        }
        return peek
    }

}

// --- Examples
    const q = new Queue();
    q.add(1);
    q.add(2);
    // console.log(q)
    console.log(q.peek());  // returns 1
    console.log(q.remove()); // returns 1
    console.log(q)
    q.remove(); // returns 2

module.exports = Queue;
