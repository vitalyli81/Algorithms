/**
 * 
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
 * some elements appear twice and others appear once.
 * Find all the eleme
 * 
 * Example
 * Input:
 * [4,3,2,7,8,2,3,1]
 * Output:
 * [5,6]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var resultArray = [];
  var tempArray = new Array(nums.length + 1);

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];

    tempArray[el] = el;
  }

  for (let i = 1; i < tempArray.length; i++) {
    if (tempArray[i] === undefined) {
      resultArray.push(i);
    }
  }

  return resultArray;
};
