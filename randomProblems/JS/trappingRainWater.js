/**
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * Example:
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  var result = 0,
    lIndex = 0,
    rIndex = height.length - 1,
    lVal = rVal = lMax = rMax = 0;

  while (lIndex < rIndex) {
    lVal = height[lIndex];
    rVal = height[rIndex];

    if (lVal < lMax) {
      result += lMax - lVal;
    } else {
      lMax = lVal;
    }

    if (rVal < rMax) {
      result += rMax - rVal;
    } else {
      rMax = rVal;
    }

    if (lVal < rVal) {
      lIndex++;
    } else {
      rIndex--;
    }
  }

  return result;
};
