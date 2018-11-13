/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.newMap = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  var tempValue;

  if (this.newMap.has(key)) {
    tempValue = this.newMap.get(key);
    this.newMap.delete(key);
    this.newMap.set(key, tempValue);
    return tempValue;
  }
  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.newMap.has(key)) {
    this.newMap.delete(key);
    this.newMap.set(key, value);
  } else {
    if (this.newMap.size >= this.capacity) {
      this.newMap.delete(this.newMap.keys().next().value);
      this.newMap.set(key, value);
    } else {
      this.newMap.set(key, value);
    }
  }
};

LRUCache.createNew = function(capacity) {
  return new LRUCache(capacity);
}

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = Object.create(LRUCache).createNew(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/