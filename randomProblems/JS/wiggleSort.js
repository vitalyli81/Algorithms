/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var isPeak = false;

    for (let i = 0; i < nums.length; i++) {
      if (isPeak) {
        if (nums[i] <= nums[i + 1]) {
          swap(nums, i, i + 1);
        }
      } else {
        if (nums[i] >= nums[i + 1]) {
          swap(nums, i, i + 1);
        }
      }

      isPeak = !isPeak;
    }
};

function swap (nums, a, b) {
  var temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}