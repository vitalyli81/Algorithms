/**
 * 
 * Binary Search Tree data structure
 */

function Node(val) {
  this.val = val;
  this.p = null;
  this.right = null;
  this.left = null;
}

function BST() {
  this.root = null;
  this.size = 0;
}

BST.prototype.size = function () {
  return this.size;
}

BST.prototype.print = function () {
  this.traverseInOrderRecursive(this.root);
}

BST.prototype.traverseInOrderRecursive = function (node) {
  if (node !== null) {
    this.traverseInOrderRecursive(node.left);
    console.log(node.val);
    this.traverseInOrderRecursive(node.right);
  }
}

BST.prototype.traverseInOrderIterative = function (node) {
  var current = node;
  var stack = [];

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    console.log(current.val);
    current = current.right;
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

BST.prototype.findSuccessor = function (val) {
  var node = this.search(val);
  var y;

  if (!node) return;

  if (node.right) {
    return this.findMin(node.right);
  }

  y = node.p;

  while (y !== null && y.right.val === node.val) {
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

  while (y !== null && y.left.val === node.val) {
    node = y;
    y = y.p;
  }

  return y;

}

BST.prototype.delete = function (val) {
  var node = this.search(val);
  var y;

  if (node.left === null) {
    this.transplant(this, node, node.right);
  } else if (node.right === null) {
    this.transplant(this, node, node.left);
  } else {
    y = this.findMin(node.right);
    if (y.p.val !== node.val) {
      this.transplant(this, y, y.right);
      y.right = node.right;
      y.right.p = y;
    }
    this.transplant(this, node, y);
    y.left = node.left;
    y.left.p = y;
  }

  this.size--;

  node.left = null;
  node.right = null;
  node.p = null;

  return node;
}

BST.prototype.transplant = function (T, n1, n2) {
  if (n1.p === null) {
    T.root = n2;
  } else if (n1.val === n1.p.left.val) {
    n1.p.left = n2;
  } else {
    n1.p.right = n2;
  }

  if (n2) {
    n2.p = n1.p;
  }
}