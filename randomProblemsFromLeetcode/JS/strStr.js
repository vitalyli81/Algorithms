/**
 * 
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  if (!haystack) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0] && haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

