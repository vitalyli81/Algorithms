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
