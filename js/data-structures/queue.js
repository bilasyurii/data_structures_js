import LinkedList from "./linked-list.js";

export default class Queue {
  constructor() {
    // This implementation of queue relies internally on linked list.
    this._list = new LinkedList();
  }

  /**
   * Amount of elements in a queue.
   * 
   * @returns {number}
   */
  get count() {
    return this._list.count;
  }

  /**
   * Add item to the end of the queue.
   * 
   * @param {any} data
   */
  enqueue(data) {
    this._list.push(data);
  }

  /**
   * Remove and return item from the beginning of the queue.
   * 
   * @returns {any}
   */
  dequeue() {
    return this._list.shift();
  }
  
  /**
   * Get data from the beginning of the queue.
   * 
   * @returns {any}
   */
  get front() {
    return this._list.front;
  }

  /**
   * Add all items of this queue to array, if specified.
   * If not, new array will be created and returned.
   * 
   * @param {any[]} array
   * 
   * @returns {any[]}
   */
  toArray(array = undefined) {
    return this._list.toArray(array);
  }

  /**
   * Remove all items from stack.
   */
  clear() {
    this._list.clear();
  }

  /**
   * Create queue from an array.
   * 
   * @param {any[]} array
   * 
   * @returns {Queue}
   */
  static fromArray(array) {
    const queue = new Queue();

    array.forEach((item) => queue.enqueue(item));

    return queue;
  }
}
