/**
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 
 * Divide and Conquer Method - O(n log n)
 * 
 */

var maxSubArray = function (nums) {
  return findMaxSubArray(nums, 0, nums.length - 1);
};

function findMaxSubArray(A, low, high) {
  if (low === high) {
    return A[low];
  } else {
    var mid = Math.floor((low + high) / 2),
      leftMax = findMaxSubArray(A, low, mid),
      rightMax = findMaxSubArray(A, mid + 1, high),
      crossMax = findMaxCrossingSubArray(A, low, mid, high);

    if (leftMax >= rightMax && leftMax >= crossMax) {
      return leftMax;
    } else if (rightMax >= leftMax && rightMax >= crossMax) {
      return rightMax;
    } else {
      return crossMax;
    }
  }
}

function findMaxCrossingSubArray(A, low, mid, high) {
  var leftSum = rightSum = Number.NEGATIVE_INFINITY,
    sum = 0;

  for (let i = mid; i >= low; i--) {
    sum += A[i];

    if (sum > leftSum) {
      leftSum = sum;
    }
  }
  sum = 0;
  for (let i = mid + 1; i <= high; i++) {
    sum += A[i];

    if (sum > rightSum) {
      rightSum = sum;
    }
  }

  return leftSum + rightSum;
}
