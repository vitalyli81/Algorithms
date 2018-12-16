/**
 * 
 * Doubly Linked List
 * 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.add = function (val) {
  const newNode = new ListNode(val);
  const prevHead = this.head;

  this.head = newNode;
  if (prevHead) {
    newNode.next = prevHead;
    prevHead.prev = newNode;
  }

  this.length++;
}

LinkedList.prototype.removeNode = function (node) {
  if (!node) return;

  const next = node.next;
  const prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  } else {
    this.head = next;
  }
  node.next = null;
  node.prev = null;
  this.length--;
}

LinkedList.prototype.removeNodeByValue = function (val) {
  if (!this.head) return;

  this.removeNode(this.search(val));
}

LinkedList.prototype.search = function (val) {
  if (!this.head) return;

  let currentNode = this.head;

  while (currentNode && currentNode.val !== val) {
    currentNode = currentNode.next;
  }
  return currentNode;
}


/**
 * var list1 = new LinkedList();
 * list1.add(1);
 * list1.add(2);
 * list1.add(3);
 * list1.add(4);
 * list1.removeNodeByValue(4);
 * list1.search(4);
 * list1.search(3);
 * list1.removeNodeByValue(2);
 */
