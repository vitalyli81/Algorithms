/**
 * 
 * Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 * 
 * Example 1:
 * 
 * Input: [1,2,3,1]
 * Output: true
 * Example 2:
 * 
 * Input: [1,2,3,4]
 * Output: false
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return true;
    hash[nums[i]] = 1;
  }

  return false;
};
