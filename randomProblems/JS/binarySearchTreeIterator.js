/**
 * 
 * Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 * Calling next() will return the next smallest number in the BST.
 * Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
 * 
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function (root) {
  this.currentIndex = -1;
  this.sortedList = [];

  var iterator = function (root, array) {
    if (root && root.left) {
      iterator(root.left, array);
  
    }
    if (root) {
      array.push(root.val);
    }
    
    if (root && root.right) {
      iterator(root.right, array);
    } 
  }

  iterator(root, this.sortedList);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  if (this.currentIndex + 1 < this.sortedList.length) return true;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  if (this.hasNext()) {
    this.currentIndex += 1;
    return this.sortedList[this.currentIndex];
  }

};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/