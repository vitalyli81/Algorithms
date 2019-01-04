/**
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example: 
 * '{}' true
 * '{[()]}' true
 * '()[]{}' true
 * '([)]' false
 * '(]' false
 * '[' false
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  if (s.length == 0) return true;

  var hash = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  var stack = [];

  for (let i = 0; i < s.length; i++) {
    var currentEl = s.charAt(i);
    var lastStackElem = stack[stack.length - 1] || 0;

    if (hash[currentEl]) {
      stack.push(hash[currentEl]);
    } else if (lastStackElem === currentEl) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
};
