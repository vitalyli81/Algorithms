/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * Input: "III"
 * Output: 3
 * Example 2:
 * 
 * Input: "IV"
 * Output: 4
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  },
    sum = 0,
    max = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let elem = obj[s[i]];

    if (elem >= max) {
      max = elem;
      sum += max;
    } else {
      sum -= elem;
    }
  }

  return sum;
};
