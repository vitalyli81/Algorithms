/**
 * 
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 * Example
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * Input: [4,3,2,9]
 * Output: [4,3,3,0]
 * Explanation: The array represents the integer 4329.
 * 
 * Input: [9,9]
 * Output: [1,0,0]
 * Explanation: The array represents the integer 99.
 * 
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var carryOver = 0;
  var i = digits.length - 1;
  var stop = false;

  while (i >= 0 && !stop) {
    var currentEl = digits[i];

    if (currentEl === 9) {
      digits[i] = 0;
      carryOver = 1;

      if (i === 0) {
        digits[i] = 1;
        digits.push(0);
      }
    } else {
      digits[i] = currentEl + 1;
      stop = true;
    }
    i--;
  }

  return digits;
};