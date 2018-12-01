/**
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * Example 2:
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var result = temp = 0,
    obj = {};

  for (let i = 0; i < s.length; i++) {
    let elem = s[i];

    if (elem in obj) {
      temp = Math.max(temp, obj[elem]);
    }
    result = Math.max(result, i - temp + 1);
    obj[elem] = i + 1;
  }

  return result;
};
