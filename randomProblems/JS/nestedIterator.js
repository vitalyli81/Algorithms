/**
 * 
 * Given a nested list of integers, implement an iterator to flatten it.
 * Each element is either an integer, or a list -- whose elements may also be integers or other lists.
 * 
 * Example:
 * Input: [[1,1],2,[1,1]]
 * Output: [1,1,2,1,1]
 * 
 * Explanation: By calling next repeatedly until hasNext returns false, 
 * the order of elements returned by next should be: [1,1,2,1,1].
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.resultList = [];
  this.index = -1;

  var flattenList = function (nestedList, result) {
    for (let i = 0; i < nestedList.length; i++) {
      if (nestedList[i].isInteger()) {
        result.push(nestedList[i].getInteger());
      } else {
        flattenList(nestedList[i].getList(), result);
      }
    }
  }

  flattenList(nestedList, this.resultList);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  if (this.index + 1 < this.resultList.length) {
    return true;
  }
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  if (this.hasNext()) {
    this.index += 1;
    return this.resultList[this.index];
  }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/