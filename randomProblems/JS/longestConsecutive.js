/**
 * 
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * 
 * Example:
 * 
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  var obj = {};
  var result = 0;
  var temp = 1;
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    let tempNum = nums[i];
    if (!obj[nums[i] - 1]) {
      while (obj[tempNum + 1]) {
        tempNum++;
        temp++;
      }
      result = Math.max(temp, result);
      temp = 1;
    }  
  }

  return result;
};