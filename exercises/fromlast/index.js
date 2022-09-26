// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//  a - b - c - d
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {

    let length = 0;
    let current = list.head
    while(current.next) {
        current = current.next
        length++
    }

    let count = 0;
    current = list.head
    while(count < length-n) {
        current = current.next
        count++
    }

    return current

}

module.exports = fromLast;
