import DoubleLinkedList from "./double-linked-list.js";

export default class Deque {
  constructor() {
    // This implementation of deque relies internally on double-linked list.
    this._list = new DoubleLinkedList();
  }

  /**
   * Amount of elements in a deque.
   * 
   * @returns {number}
   */
  get count() {
    return this._list.count;
  }

  /**
   * Add item to the end of the deque.
   * 
   * @param {any} data
   */
  push(data) {
    this._list.push(data);
  }

  /**
   * Remove and return item from the end of the deque.
   * 
   * @returns {any}
   */
  pop() {
    return this._list.pop();
  }
  
  /**
   * Add item to the beginning of the deque.
   * 
   * @param {any} data
   */
  pushFront(data) {
    this._list.unshift(data);
  }

  /**
   * Remove and return item from the beginning of the deque.
   * 
   * @returns {any}
   */
  popFront() {
    return this._list.shift();
  }
  
  /**
   * Get data from the beginning of the deque.
   * 
   * @returns {any}
   */
  get front() {
    return this._list.front;
  }
  
  /**
   * Get data from the end of the deque.
   * 
   * @returns {any}
   */
  get back() {
    return this._list.back;
  }

  /**
   * Add all items of this deque to array, if specified.
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
   * Create deque from an array.
   * 
   * @param {any[]} array
   * 
   * @returns {Deque}
   */
  static fromArray(array) {
    const deque = new Deque();

    array.forEach((item) => deque.push(item));

    return deque;
  }
}
