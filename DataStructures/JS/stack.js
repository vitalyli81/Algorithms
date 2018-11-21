/**
 * Stack data structure
 * Firts in Last out
 */

// implementation with Objects

function Stack() {
  this.data = {};
  this.size = 0;
  this.top = 0;
}

Stack.prototype.push = function (val) {
  this.size++;
  this.top++;
  this.data[this.top] = val;
}

Stack.prototype.pop = function () {
  if (this.size < 1) return;

  var elem = this.data[this.top];

  this.size--;
  delete this.data[this.top];
  this.top--;

  return elem;
}

// implementaton with arrays

function Stack() {
  this.data = [];
}

Stack.prototype.push = function (val) {
  this.data.push(val);
}

Stack.prototype.pop = function (val) {
  if (this.data.length < 1) return;

  return this.data.pop();
}
