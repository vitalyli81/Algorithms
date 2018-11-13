/**
 * 
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 * 
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache,otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 * 
 * 
 * Example 
 * 
 * LRUCache cache = new LRUCache( 2 );
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 * 
 */


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