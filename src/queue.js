const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;
  tail = null;
  getUnderlyingList() {
    return this.head;
  }

  enqueue(val) {
    if (this.head===null) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    const returnedValue = this.head.value;
    this.head = this.head.next;
    return returnedValue;
  }
  
}

module.exports = {
  Queue
};
