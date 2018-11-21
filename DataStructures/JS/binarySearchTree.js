/**
 * 
 * Binary Search Tree data structure
 */

function Node(val) {
  this.val = val;
  this.p = null;
  this.right = null;
  this.left = null;
  this.size = 0;
}

function BST() {
  this.root = null;
}

BST.prototype.size = function () {
  return this.size;
}

BST.prototype.print = function () {
  this.traverse(this.root);
}

BST.prototype.traverse = function (x) {
  if (x !== null) {
    this.traverse(x.left);
    console.log(x.val);
    this.traverse(x.right);
  }
}

BST.prototype.insert = function (val) {
  var newNode = new Node(val);
  var y = null;
  var x = this.root;

  while (x !== null) {
    y = x;
    if (newNode.val < x.val) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  newNode.p = y;

  if (y === null) {
    this.root = newNode;
  } else if (newNode.val < y.val) {
    y.left = newNode;
  } else {
    y.right = newNode;
  }

  this.size++;
}

BST.prototype.findMin = function (node) {
  if (this.size === 0) return;

  var x = node || this.root;

  while (x.left !== null) {
    x = x.left;
  }
  return x;
}

BST.prototype.findMax = function (node) {
  if (this.size === 0) return;

  var x = node || this.root;

  while (x.right !== null) {
    x = x.right;
  }

  return x;
}

BST.prototype.search = function (val) {
  if (this.size === 0) return;

  var x = this.root;

  while (x !== null && val !== x.val) {
    if (val < x.val) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  return x;
}

BST.prototype.getSuccessor = function (val) {
  var node = this.search(val);
  var y;

  if (!node) return;

  if (node.right) {
    return this.findMin(node.right);
  }

  y = node.p;

  while (y !== null && y.right !== node) {
    node = y;
    y = y.p;
  }

  return y;

}

BST.prototype.findPredecessor = function (val) {
  var node = this.search(val);
  var y;

  if (!node) return;

  if (node.left) {
    return this.findMax(node.left);
  }

  y = node.p;

  while (y !== null && y.left !== node) {
    node = y;
    y = y.p;
  }

  return y;

}