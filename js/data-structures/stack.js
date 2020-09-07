import LinkedList from "./linked-list.js";

export default class Stack {
  constructor() {
    // This implementation of stack relies internally on linked list.
    // Also note, that it works with the beginning of the list, but not
    // with the end, because it's faster to remove items from the head.
    this._list = new LinkedList();
  }

  /**
   * Amount of elements in a stack.
   * 
   * @returns {number}
   */
  get count() {
    return this._list.count;
  }

  /**
   * Add item to the top of the stack.
   * 
   * @param {any} data
   */
  push(data) {
    this._list.unshift(data);
  }

  /**
   * Remove and return item from the top of the stack.
   * 
   * @returns {any}
   */
  pop() {
    return this._list.shift();
  }
  
  /**
   * Get data from the top of the stack.
   * 
   * @returns {any}
   */
  get top() {
    return this._list.front();
  }

  /**
   * Add all items of this stack to array, if specified.
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
   * Create stack from an array.
   * 
   * @param {any[]} array
   * 
   * @returns {Stack}
   */
  static fromArray(array) {
    const stack = new Stack();

    array.forEach((item) => stack.push(item));

    return stack;
  }
}
