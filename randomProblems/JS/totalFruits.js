/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  var len = tree.length;

  if (len < 3) return len;

  var result = 0;
  var temp = 0;
  var obj = {};
  var limit = 0;
  var prevIndex = 0;
  var i = 0;

  while (i < len) {
    if (obj[tree[i]]) {
      temp++;
      i++;
    } else if (!obj[tree[i]] && limit < 2) {
      obj[tree[i]] = 1;
      temp++;
      limit++;
      prevIndex = i;
      i++;
    } else {
      obj = {};
      limit = 0;
      result = Math.max(temp, result);
      temp = 0;
      i = prevIndex;
    }
  }

  return Math.max(temp, result);

};