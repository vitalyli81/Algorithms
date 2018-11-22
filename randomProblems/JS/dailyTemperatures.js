/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  var stack = [];
  var result = Array(T.length);

  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= stack[stack.length - 1].val) {
      stack.pop();
    }
    result[i] = !stack.length ? 0 : stack[stack.length -1].index - i;
    stack.push({
      val: T[i],
      index: i
    });
  }

  return result;
};
