/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  var prev = this.stack.length ? this.stack[this.stack.length - 1].min : null;
  var min = prev;

  if (prev === null || x < prev) {
    min = x;
  } 
  
  this.stack.push({
    val: x,
    min: min
  });
  
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack.length && this.stack[this.stack.length - 1].min || null ;
};

MinStack.prototype.createNew = function() {
  return new MinStack();
}
/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/