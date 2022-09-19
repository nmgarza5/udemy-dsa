// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.queue = []
    }

    add(ele) {
        return this.queue.push(ele)
    }

    remove() {
        return this.queue.shift()
    }

}

const q = new Queue();
console.log(q)
q.add(1);
q.add(2);
q.add(3);
q.add(4);
console.log(q)
console.log(q.remove()); // returns 1;
console.log(q)

module.exports = Queue;
