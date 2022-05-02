const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
  result = [];

  getUnderlyingList() {
      return this.result[0]

  }

  enqueue(value) {
      this.result.push({
          value: value,
          next: null,
      })
      if (this.result.length > 1) {
          this.result[this.result.length - 2].next = this.result[this.result.length - 1]
      }

  }

  dequeue() {
      if (this.result.length == 0)
          return null;
      else return this.result.shift().value;

  }
}

module.exports = {
  Queue
};
