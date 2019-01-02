/**
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * Input: 123
 * Output: 321
 * Example 2:
 * 
 * Input: -123
 * Output: -321
 * Example 3:
 * 
 * Input: 120
 * Output: 21
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. 
 *  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * 
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var result = 0,
    pop = 0,
    MaxSigned32BitInteger = 2147483647,
    MinSigned32BitInteger = -2147483648;

  while (x) {
    pop = x % 10;  // pop from integer
    x = parseInt(x / 10);
    result = result * 10 + pop; // push to integer
    if (result > MaxSigned32BitInteger || result < MinSigned32BitInteger) return 0;
  }

  return result;
};
