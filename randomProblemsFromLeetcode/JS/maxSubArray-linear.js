/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  var sum = maxSum =  Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};
