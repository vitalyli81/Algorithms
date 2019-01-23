/**
 * 
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example
 * Input: 1
 * Output: true 
 * Explanation: 2^0 = 1
 * 
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 * 
 * Input: 218
 * Output: false
 * 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1 || n === 2) return true;
  if (n % 2 || n === 0) return false;

  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1 || false;
};