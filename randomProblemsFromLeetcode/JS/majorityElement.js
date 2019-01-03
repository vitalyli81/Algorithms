/**
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 * Example 1:
 * 
 * Input: [3,2,3]
 * Output: 3
 * Example 2:
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var hash = {};
  var max = Number.NEGATIVE_INFINITY;
  var result;

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }


  for (let key in hash) {
    if (max < hash[key] && hash.hasOwnProperty(key)) {
      max = hash[key];
      result = key;
    }
  }

  return result;
};
