/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1 || n === 2) return true;
  if (n % 2 || n === 0) return false;

  var m = n;
  while (m % 2 === 0) {
    m = m / 2; 
  }
  return m === 1 || false;
};