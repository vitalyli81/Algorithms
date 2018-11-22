/**
 * 
 *  Given an integer n, return the number of trailing zeroes in n!.} n 
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n < 5) return 0;

  var res = 0

  while (n > 4) {
    n = Math.floor(n / 5);
    res += n;

  }

  return res;
};