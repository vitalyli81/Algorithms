/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  var base = x;
  var exp = n;
  var y = 1;

  if (n < 0) {
    exp = -1 * n;
    base = 1 / base;
  }

  while (exp > 1) {
    // odd
    if (exp % 2) {
      y *= base;
      base *= base;
      exp = (exp - 1) / 2;
      // even
    } else {
      base *= base;
      exp = exp / 2;
    }
  }

  return base * y;
};
