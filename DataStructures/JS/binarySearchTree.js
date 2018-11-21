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

BST.prototype.findMin = function () {
  var x = this.root;

  while (x.left !== null) {
    x = x.left;
  }
  return x;
}

BST.prototype.findMax = function () {
  var x = this.root;

  while (x.right !== null) {
    x = x.right;
  }

  return x;
}

BST.prototype.search = function (val) {
  var x = this.root;

  while (x !== null  && val !== x.val) {
    if (val < x.val) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  return x;
}

