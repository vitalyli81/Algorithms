/**
 * 
 * Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};

// iterative

var maxDepth = function (root) {
  if (root === null) return 0;

  const height = [];
  const stack = [{ node: root, height: 1 }];

  while (stack.length) {
    const current = stack.pop();
    if (!current.node.left && !current.node.right) height.push(current.height);
    if (current.node.left) stack.push({ node: current.node.left, height: current.height + 1 });
    if (current.node.right) stack.push({ node: current.node.right, height: current.height + 1 });
  }
  return Math.max(...height)
};