/**
 * Queue data structure 
 * First in First out
 */

function Queue() {
  this.data = {};
  this.size = 0;
  this.tail = 0;
  this.head = 0;
}

Queue.prototype.enqueue = function (val) {
  this.tail++;
  this.data[this.tail] = val;
  this.size++;
}

Queue.prototype.dequeue = function () {
  if (this.size < 1) return;

  this.head++;
  var elem = this.data[this.head];

  delete this.data[this.head];

  this.size--;

  if (this.size === 0) {
    this.tail = 0;
    this.head = 0;
  }

  return elem;
}