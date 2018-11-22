/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  var res = 0
  if (n < 5) return 0;

  while (n > 4) {
    n = Math.floor(n / 5);
    res += n;

  }

  return res;
};

trailingZeroes(5)