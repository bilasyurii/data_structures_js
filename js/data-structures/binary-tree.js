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

    this._addNode(new BinaryTreeNode(key, data));
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

  /**
   * Remove item from binary tree by specifying it's key.
   * Returns removed item or null, if not present in the tree.
   * 
   * @param {number} key
   * 
   * @returns {any}
   */
  remove(key) {
    let node = this._root;
    let parent;
    let isRight;

    while (node) {
      if (node.key === key) {
        const rightChild = node.right;

        if (parent) {
          if (rightChild) {
            if (isRight) {
              parent.right = rightChild;
            } else {
              parent.left = rightChild;
            }

            const leftChild = node.left;

            if (leftChild) {
              this._addNode(leftChild);
            }
          } else {
            let leftChild = node.left;

            if (isRight) {
              parent.right = leftChild;
            } else {
              parent.left = leftChild;
            }
          }
        } else {
          const leftChild = node.left;

          if (rightChild) {
            this._root = rightChild;

            if (leftChild) {
              this._addNode(leftChild);
            }
          } else {
            this._root =  leftChild;
          }
        }

        --this._count;

        return node.data;
      } else if (key > node.key) {
        parent = node;
        isRight = true;
        node = node.right;
      } else {
        parent = node;
        isRight = false;
        node = node.left;
      }
    }

    return null;
  }

  /**
   * Internal method for adding nodes.
   * 
   * @param {BinaryTreeNode} newNode
   */
  _addNode(newNode) {
    const key = newNode.key;
    let node = this._root;

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
   * Get items, that have a key greater or equal than the specified one.
   * Second argument is optional and if it is specified, found items will
   * be added to the end of it.
   * 
   * @param {number} key
   * @param {any[]} destination
   * 
   * @returns {any[]}
   */
  greaterEqual(key, destination = undefined) {
    if (destination == undefined) {
      destination = [];
    }

    this._greaterEqual(this._root, key, destination);

    return destination;
  }

  /**
   * Get items, that have a key less or equal than the specified one.
   * Second argument is optional and if it is specified, found items will
   * be added to the end of it.
   * 
   * @param {number} key
   * @param {any[]} destination
   * 
   * @returns {any[]}
   */
  lessEqual(key, destination = undefined) {
    if (destination == undefined) {
      destination = [];
    }

    this._lessEqual(this._root, key, destination);

    return destination;
  }

  /**
   * Internal method for getting items with
   * keys greater or equal than the specified one.
   * 
   * @param {BinaryTreeNode} node
   * @param {number} key
   * @param {any[]} destination
   */
  _greaterEqual(node, key, destination) {
    if (node) {
      if (node.key >= key) {
        destination.push(node.data);

        this._greaterEqual(node.left, key, destination);
      }

      this._greaterEqual(node.right, key, destination);
    }
  }

  /**
   * Internal method for getting items with
   * keys less or equal than the specified one.
   * 
   * @param {BinaryTreeNode} node
   * @param {number} key
   * @param {any[]} destination
   */
  _lessEqual(node, key, destination) {
    if (node) {
      if (node.key <= key) {
        destination.push(node.data);

        this._lessEqual(node.right, key, destination);
      }

      this._lessEqual(node.left, key, destination);
    }
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
