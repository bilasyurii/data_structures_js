export default class MaxHeap {
  constructor() {
    this._items = [];
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
   * Get the biggest item in heap (root).
   * 
   * @returns {number}
   */
  get max() {
    return this._items[0];
  }

  /**
   * Removes and returns the biggest item of the heap (root).
   * 
   * @returns {number}
   */
  pop() {
    const count = this._count;

    if (count == 0) {
      return null;
    } else if (count == 1) {
      this._count = 0;

      return this._items[0];
    } else {
      const items = this._items;
      const max = items[0];
      
      items[0] = items.pop();
      this._count = count - 1;

      this._heapify(0);

      return max;
    }
  }

  /**
   * Add new item to the heap.
   * 
   * @param {number} value
   */
  add(value) {
    const items = this._items;
    let index = this._count++;
    let parent;

    items.push(value);

    while (true) {
      if (index == 0) {
        break;
      } else {
        parent = MaxHeap.parent(index);

        if (items[parent] < items[index]) {
          this._swap(parent, index);

          index = parent;
        } else {
          break;
        }
      }
    }
  }

  /**
   * Do some action for each item of the collection.
   * 
   * @param {(value: Any, index: number, list: MaxHeap)} action 
   */
  forEach(action) {
    const items = this._items;
    const count = this._count;

    for (let i = 0; i < count; ++i) {
      action(items[i], i, this);
    }
  }

  /**
   * Add all items of this heap to array, if specified.
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
   * Remove all items from heap.
   */
  clear() {
    this._count = 0;
    this._items = [];
  }

  /**
   * Clone this heap.
   * 
   * @returns {MaxHeap}
   */
  clone() {
    const heap = new MaxHeap();

    this.forEach((value) => heap.add(value));

    return heap;
  }

  /**
   * Create max-heap from an array.
   * 
   * @param {any[]} array
   * 
   * @returns {MaxHeap}
   */
  static fromArray(array) {
    const heap = new MaxHeap();

    array.forEach((item) => heap.add(item));

    return heap;
  }

  /**
   * Get parent index of a node with specified index.
   * 
   * @param {number} index
   * 
   * @returns {number}
   */
  static parent(index) {
    return ~~((index - 1) * 0.5);
  }

  /**
   * Get left child index of a node with specified index.
   * 
   * @param {number} index
   * 
   * @returns {number}
   */
  static left(index) {
    return index * 2 + 1;
  }

  /**
   * Get right child index of a node with specified index.
   * 
   * @param {number} index
   * 
   * @returns {number}
   */
  static right(index) {
    return index * 2 + 2;
  }

  /**
   * Internal method for ensuring that subtree follows the
   * rules of max-heap (is heapified).
   * 
   * @param {number} index
   */
  _heapify(index) {
    const left = MaxHeap.left(index);
    const right = MaxHeap.right(index);
    const items = this._items;

    let max = index;

    if (left < this._count && items[left] > items[index]) {
      max = left;
    }

    if (right < this._count && items[right] > items[max]) {
      max = right;
    }

    if (max != index) {
      this._swap(index, max);
      this._heapify(max);
    }
  }

  /**
   * Swap two items, using their indexes.
   * 
   * @param {number} indexA
   * @param {number} indexB
   */
  _swap(indexA, indexB) {
    const items = this._items;
    const temp = items[indexA];

    items[indexA] = items[indexB];
    items[indexB] = temp;
  }
}
