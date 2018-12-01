/**
 * 
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 * 
 * Example:
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var mappings = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  if (!digits || digits.length === 0) return [];

  return merge(digits, mappings);
};

function merge(digits, map) {
  var result = [];

  if (digits.length === 1) return map[digits].split('');

  var set1 = merge(digits.substring(0, 1), map);
  var set2 = merge(digits.substring(1), map);

  for (let j = 0; j < set1.length; j++) {
    for (let i = 0; i < set2.length; i++) {
      result.push(set1[j] + set2[i]);
    }
  }

  return result;
}
