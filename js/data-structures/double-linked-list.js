export default class DoubleLinkedList {
  constructor() {
    /**
     * Item at the beginning.
     * 
     * @type {DoubleLinkedListNode}
     */
    this._head = null;

    /**
     * Item at the end.
     * 
     * @type {DoubleLinkedListNode}
     */
    this._tail = null;

    this._count = 0;
  }

  /**
   * Amount of elements in a collection.
   * 
   * @returns {number}
   */
  get count() {
    return this._count;
  }

  /**
   * Get data from the beginning of the collection.
   * 
   * @returns {any}
   */
  get front() {
    const head = this._head;

    if (head) {
      return head.data;
    } else {
      return null;
    }
  }

  /**
   * Get data from the end of the collection.
   * 
   * @returns {any}
   */
  get back() {
    const tail = this._tail;

    if (tail) {
      return tail.data;
    } else {
      return null;
    }
  }

  /**
   * Add item to the end of the collection.
   * 
   * @param {any} data
   */
  push(data) {
    const node = new DoubleLinkedListNode(data);
    const tail = this._tail;

    if (tail) {
      tail.next = node;
      node.prev = tail;
      this._tail = node;
    } else {
      this._tail = this._head = node;
    }

    ++this._count;
  }

  /**
   * Remove and return item from the end of the collection.
   * 
   * @returns {any}
   */
  pop() {
    const count = this._count;

    if (count == 0) {
      return undefined;
    } else if (count == 1) {
      const data = this._head.data;

      this._head = this._tail = null;
      this._count = 0;

      return data;
    } else {
      const oldTail = this._tail;
      const newTail = this._tail = oldTail.prev;

      newTail.next = null;

      return oldTail.data;
    }
  }

  /**
   * Add item to the beginning of the collection.
   * 
   * @param {any} data
   */
  unshift(data) {
    const node = new DoubleLinkedListNode(data);
    const head = this._head;

    if (head) {
      node.next = head;
      head.prev = node;
      this._head = node;
    } else {
      this._head = this._tail = node;
    }

    ++this._count;
  }

  /**
   * Remove and return item from the beginning of the collection.
   * 
   * @returns {any}
   */
  shift() {
    const count = this._count;

    if (count == 0) {
      return undefined;
    } else if (count == 1) {
      const data = this._head.data;

      this._head = this._tail = null;
      this._count = 0;

      return data;
    } else {
      this._count = count - 1;

      const oldHead = this._head;
      const newHead = oldHead.next;

      newHead.prev = null;
      this._head = newHead;

      return oldHead.data;
    }
  }

  /**
   * Get item by index.
   * 
   * @param {number} index
   * 
   * @returns {any}
   */
  get(index) {
    if (index < 0 || index >= this._count) {
      throw new Error('Incorrect index.');
    }

    let node = this._head;

    for (let i = 0; i < index; ++i) {
      node = node.next;
    }

    return node.data;
  }

  /**
   * Do some action for each item of the collection.
   * 
   * @param {(value: Any, index: number, list: DoubleLinkedList)} action 
   */
  forEach(action) {
    let node = this._head;
    let i = 0;

    while (node) {
      action(node.data, i++, this);

      node = node.next;
    }
  }

  /**
   * Do some action for each item of the collection, but traverse it in reverse order.
   * 
   * @param {(value: Any, index: number, list: DoubleLinkedList)} action 
   */
  forEachReversed(action) {
    let node = this._tail;
    let i = this._count;

    while (node) {
      action(node.data, --i, this);

      node = node.prev;
    }
  }

  /**
   * Add all items of this collection to array, if specified.
   * If not, new array will be created and returned.
   * 
   * @param {any[]} array
   * 
   * @returns {any[]}
   */
  toArray(array = undefined) {
    if (array == undefined) {
      array = [];
    }

    this.forEach((item) => array.push(item));

    return array;
  }

  /**
   * Add item to the collection at position,
   * specified by index.
   * 
   * @param {number} index
   * @param {any} data
   */
  insert(index, data) {
    const newNode = new DoubleLinkedListNode(data);

    if (index == this._count) {
      this.push(data);
    } else if (index == 0) {
      this.unshift(data);
    } else if (index < 0 || index > this._count) {
      throw new Error('Incorrect index.');
    } else {
      let node = this._head;

      for (let i = 1; i < index; ++i) {
        node = node.next;
      }

      newNode.next = node.next;
      newNode.next.prev = newNode;
      newNode.prev = node;
      node.next = newNode;

      ++this._count;
    }
  }

  /**
   * Remove item from collection by specifying it's index.
   * Returns removed item.
   * 
   * @param {number} index
   * 
   * @returns {any}
   */
  remove(index) {
    if (index == 0) {
      return this.shift();
    } else if (index < 0 || index >= this._count) {
      throw new Error('Incorrect index.');
    } else {
      --this._count;

      let node = this._head;

      for (let i = 1; i < index; ++i) {
        node = node.next;
      }

      const removedNode = node.next;

      node.next = removedNode.next;
      node.next.prev = node;

      if (this._tail == removedNode) {
        this._tail = node;
      }

      return removedNode.data;
    }
  }

  /**
   * Get index of item in collection.
   * Returns -1, if item is not found.
   * 
   * @param {any} item
   * 
   * @returns {number}
   */
  indexOf(item) {
    let node = this._head;
    let i = 0;

    while (node) {
      if (node.data == item) {
        return i;
      }

      ++i;
      node = node.next;
    }

    return -1;
  }

  /**
   * Find an first occurance of an item, defined by some expression.
   * Returns null, if not found.
   * 
   * @param {(value: Any, index: number, list: DoubleLinkedList) => boolean} expression 
   * 
   * @returns {any}
   */
  find(expression) {
    let node = this._head;
    let i = 0;

    while (node) {
      if (expression(node.data, i++, this)) {
        return node.data;
      }

      node = node.next;
    }

    return null;
  }

  /**
   * Find all items, defined by some expression.
   * Returns empty array, if not found.
   * Puts items into destination, if specified.
   * 
   * @param {(value: Any, index: number, list: DoubleLinkedList) => boolean} expression 
   * @param {any[]} destination
   * 
   * @returns {any[]}
   */
  findAll(expression, destination = undefined) {
    if (destination == undefined) {
      destination = [];
    }

    let node = this._head;
    let i = 0;

    while (node) {
      if (expression(node.data, i++, this)) {
        destination.push(node.data);
      }

      node = node.next;
    }

    return destination;
  }

  /**
   * Remove all items from collection.
   */
  clear() {
    this._head = this._tail = null;
    this._count = 0;
  }

  /**
   * Clone this collection.
   * 
   * @returns {DoubleLinkedList}
   */
  clone() {
    const list = new DoubleLinkedList();

    this.forEach((item) => list.push(item));

    return list;
  }

  /**
   * Create double linked list from an array.
   * 
   * @param {any[]} array
   * 
   * @returns {DoubleLinkedList}
   */
  static fromArray(array) {
    const list = new DoubleLinkedList();

    array.forEach((item) => list.push(item));

    return list;
  }
}

/**
 * Basic element of a double linked list. A node
 * with two link: to the next and previous items of a list.
 * 
 * @class
 */
class DoubleLinkedListNode {
  /**
   * @constructor
   * 
   * @param {any} data Any type of data to store in the collection.
   */
  constructor(data) {
    this.data = data;

    /**
     * @type {DoubleLinkedListNode}
     */
    this.next = null;

    /**
     * @type {DoubleLinkedListNode}
     */
    this.prev = null;
  }
}
