export default class BinaryTree {
  /**
   * @param {(a: any, b: any) => number} comparator 
   */
  constructor(comparator = BinaryTree._defaultComparator) {
    this.comparator = comparator;
    this._root = null;
    this._count = 0;
  }

  /**
   * Add item to binary tree.
   * 
   * @param {any} data
   */
  add(data) {
    ++this._count;

    const comparator = this.comparator;
    let node = this._root;
    const newNode = new BinaryTreeNode(data);

    if (node) {
      while (true) {
        if (comparator(data, node.data) > 0) {
          if (node.right) {
            node = node.right;
          } else {
            node.right = newNode;
  
            return;
          }
        } else {
          if (node.left) {
            node = node.left;
          } else {
            node.left = newNode;
  
            return;
          }
        }
      }
    } else {
      this._root = newNode;
    }
  }

  static _defaultComparator(a, b) {
    return a - b;
  }
}

/**
 * Basic element of a binary tree. A node
 * with two link - to the left and right children nodes.
 * 
 * @class
 */
class BinaryTreeNode {
  /**
   * @constructor
   * 
   * @param {any} data Any type of data to store in the collection.
   */
  constructor(data) {
    this.data = data;

    /**
     * @type {BinaryTreeNode}
     */
    this.left = null;

    /**
     * @type {BinaryTreeNode}
     */
    this.right = null;
  }
}
