/**
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * 
 * [
 * "((()))",
 * "(()())",
 * "(())()",
 * "()(())",
 * "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var result = [];

  join(0, 0, '', result, n);

  return result;
};

function join(open, close, string, result, max) {
  if (string.length === 2 * max) {
    result.push(string);
    return;
  }

  if (open < max) {
    join(open + 1, close, string + '(', result, max);
  }

  if (close < open) {
    join(open, close + 1, string + ')', result, max);
  }

}