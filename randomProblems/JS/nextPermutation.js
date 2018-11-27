/**
 * 
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place and use only constant extra memory.
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  var i = j = nums.length - 1;
  var stop = false;
  var kIndex = null;
  var tenp;

  // find largest index K whose value > K+1
  while (i >= 0 && !stop) {
    if (i - 1 >= 0 && nums[i] > nums[i - 1]) {
      stop = true;
      kIndex = i - 1;
    }
    i--;
  }

  stop = false;
  i = nums.length - 1;

  // find largest index I whose value > value of kIndex
  while (kIndex !== null && i >= 0 && !stop) {
    if (nums[kIndex] < nums[i]) {
      stop = true;
      temp = nums[kIndex];
      nums[kIndex] = nums[i];
      nums[i] = temp;
    }
    i--;
  }

  kIndex = kIndex === null ? 0 : kIndex + 1;

  // reverse
  while (kIndex < j) {
    temp = nums[kIndex];
    nums[kIndex] = nums[j];
    nums[j] = temp;
    kIndex++;
    j--;
  }
};