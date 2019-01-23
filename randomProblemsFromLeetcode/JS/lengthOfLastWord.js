/**
 * 
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0;

  var array = s.trim().split(' ');

  return array[array.length - 1].length;
};


// second solution

var lengthOfLastWord = function (s) {
  if (!s) return 0;

  var last = s.length - 1,
    array;

  while (s[last] === ' ') {
    last--;
  }

  array = s.substring(0, last + 1).split(' ');

  return array[array.length - 1].length;
};

// 3rd solution

var lengthOfLastWord = function (s) {
  if (!s) return 0;

  var last = s.length - 1,
    count = 0;

  while (last >= 0 && s[last] === ' ') {
    last--;
  }

  while (last >= 0 && s[last] !== ' ') {
    last--;
    count++;
  }

  return count;
};