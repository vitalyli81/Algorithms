/**
 * 
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * 
 * Given nums = [1,1,2],
 * 
 * 
 * Your function should return length = 2, with the first two elements 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
