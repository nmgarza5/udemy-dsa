// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

/*
input: series of statements, create a new stack class, call push and pop methods
return: the correct operations are performed

plan of attack:
    - form constructor, this.data = []
    - push method:
        - return this.data.push()
    - pop method:
        - return this.data.pop()


Time: add and pop O(1)
Space: add and pop O(1)
*/

class Stack {
    constructor() {
        this.data = []
    }

    push(ele) {
        return this.data.push(ele)
    }

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length-1]
    }

}

module.exports = Stack;
