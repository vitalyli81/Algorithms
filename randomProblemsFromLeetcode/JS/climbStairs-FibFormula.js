/**
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) return n;
  var sqrt5 = Math.sqrt(5);
  var goldenRatioMax = Math.pow(1 + sqrt5, n + 1);
  var goldenRatioMin = Math.pow(1 - sqrt5, n + 1);

  return Math.round((goldenRatioMax - goldenRatioMin)/(Math.pow(2,n + 1)*sqrt5));
};
