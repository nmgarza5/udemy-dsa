// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.

/*

INPUT: linked list

RETURN: true if circular else false

NOTES:
    - circular: a list is circular if a node's next property is pointing to a node that has already been visited

PLAN OF ATTACK:
    - initialize 'visited' as a new Set
    - loop through the lsit once
    - add each node to visited
    - if conditional to check if current.next is in visited
        - if true then return true
    - else: reassign current
*/

const { Node } = require("./linkedlist")
const { LinkedList } = require("./linkedlist")

function circular(list) {
    if (list.head === null) return false
    let slow = list.head
    let fast = list.head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    return false
}

// --- Examples
  const l = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  console.log(circular(l)) // true

module.exports = circular;
