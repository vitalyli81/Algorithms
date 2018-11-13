/**
 * 
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example
 * 
 * Input: 27
 * Output: true
 * 
 * Input: 0
 * Output: false
 * 
 * Input: 9
 * Output: true
 * 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 3 || n === 1) return true;
  if (n === 0 || n % 3) return false;
  return isPowerOfThree(n / 3);
};