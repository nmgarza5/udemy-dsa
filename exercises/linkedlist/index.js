// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

const { sumBy } = require("lodash")

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(val) {
        if (this.head) {
            let temp = this.head
            this.head = new Node(val, temp)
        } else {
            this.head = new Node(val)
        }
    }

    size() {
        if (!this.head) return 0
        let count = 1;
        let current = this.head
        while(current) {
            if (!current.next) return count
            else {
                current = current.next
                count++
            }
        }
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let current = this.head
        while(current) {
            if (!current.next) return current
            else {
                current = current.next
            }
        }
    }

    clear() {
       return this.head = null
    }

    removeFirst() {
        return this.head = this.head.next
    }

    removeLast() {
        let current = this.head
        if (!current || !current.next) return this.head = null

        while(current) {
            let last  = current.next.next === null
            if (last) return current.next = null
            else current = current.next
        }
    }

    insertLast(val) {
        let node = new Node(val)
        let current = this.head
        if (!current) return this.head = node


        while(current) {
            let last  = current.next === null
            if (last) return current.next = node
            else current = current.next
        }
    }

    getAt(index) {
        let current = this.head
        if (!current) return null

        let currentIndex = 0
        while (currentIndex <= index) {
            if (currentIndex === index) return current
            else if (!current.next) return null
            else {
                currentIndex++
                current = current.next
            }
        }
    }

    removeAt(index) {
        // empty list will not crash function. return nothing
        // doesnt crash on index out of bounds. return nothing
        // can remove first node, any index, and last index
        let current = this.head
        if (!current) return
        // if index to be removed is first position, reassign the head
        if (index === 0) {
            this.head = current.next
            return
        }
        let currentIndex = 1
        let prev = current;
        current = current.next

        while (currentIndex <= index) {
            if (currentIndex === index) {
                if (current === null) return // takes care of removing an index at position 1 with list length of 1
                prev.next = current.next
                return
            }
            if (!current.next) return
            currentIndex++
            current = current.next
        }
    }

    insertAt(val, index) {
        let node = new Node(val)
        let current = this.head
        if (!current) return this.head = node

        if (index === 0) {
            let temp = this.head
            this.head = node
            node.next = temp
            return
        }

        let currentIndex = 1
        let prev = current;
        current = current.next

        while (currentIndex <= index) {
            if (current === null) return prev.next = node//  if we are ever given an index out of range, add new node to the end of list
            if (currentIndex === index) {
                prev.next = node
                node.next = current
                return
            }
            currentIndex++
            prev = current
            current = current.next
        }
    }

    forEach(cb) {
        let current = this.head
        while (current) {
            cb(current)
            current = current.next
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current;
            current = current.next
        }
    }

}

const l = new LinkedList();

// console.log(l.size())
// console.log(l.getLast())
// l.insertFirst(1);
// l.insertFirst(2);
// l.insertFirst(3);
// l.insertFirst(4);
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);
// console.log(l.size())

l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
l.insertAt('hi', 2);

// console.log(l.getAt(0)) // 1
// console.log(l.getAt(1)) // 2
// console.log(l.getAt(2)) // 3
for (let ele of l) {
    console.log(ele)
}
// console.log(l.getAt(3)) // 4
// console.log(l)
// l.insertLast(5);
// console.log(l.getLast()) // 1
// // console.log(l.getFirst()) // 4
// // l.clear()
// console.log(l) // 0 -> HEAD === NULL
// console.log(l.size())

module.exports = { Node, LinkedList };
