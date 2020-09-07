export default class BinaryTree {
  constructor() {
    this._root = null;
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
   * Add item to binary tree.
   * 
   * @param {number} key
   * @param {any} data
   */
  add(key, data) {
    ++this._count;

    let node = this._root;
    const newNode = new BinaryTreeNode(key, data);

    if (node) {
      while (true) {
        if (key - node.key > 0) {
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

  /**
   * Get element of the binary tree using a key.
   * Returns null, if element isn't present in the tree.
   * 
   * @param {number} key
   * 
   * @returns {any}
   */
  get(key) {
    let node = this._root;

    while (node) {
      if (node.key === key) {
        return node.data;
      } else if (key > node.key) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return null;
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
   * @param {number} key
   * @param {any} data Any type of data to store in the collection.
   */
  constructor(key, data) {
    this.key = key;
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
