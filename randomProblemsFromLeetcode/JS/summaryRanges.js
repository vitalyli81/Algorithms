/**
 * 
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 * 
 * Example 1:
 * 
 * Input:  [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) return nums;
  var result = [];
  var temp = null;

  for (let i = 0, len = nums.length; i < len; i++) {
    let isLast = i + 1 === len;
    if (temp === null) temp = nums[i];

    if (nums[i] + 1 < nums[i + 1] || isLast) {
      if (!isNaN(nums[i - 1]) && nums[i - 1] + 1 === nums[i]) {
        temp +=  `->${nums[i]}`;
      }
      
      result.push(`${temp}`);
      temp = null;
    }
    
  }

  return result;
};