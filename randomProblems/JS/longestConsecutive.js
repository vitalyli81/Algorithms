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