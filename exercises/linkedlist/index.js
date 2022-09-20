// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
        let current = this.head
        if (!current) return this.head = val

        while(current) {
            let last  = current.next === null
            if (last) current.next = val
            else current = current.next
        }
    }

}

const l = new LinkedList();
l.insertFirst('a');

l.insertLast('b');

console.log(l.size())
console.log(l.getLast())
// l.insertFirst(1);
// l.insertFirst(2);
// l.insertFirst(3);
// l.insertFirst(4);
// l.insertLast(5);
// console.log(l.getLast()) // 1
// // console.log(l.getFirst()) // 4
// // l.clear()
// console.log(l) // 0 -> HEAD === NULL
// console.log(l.size())

module.exports = { Node, LinkedList };
