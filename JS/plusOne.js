/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var carryOver = 0;
  var i = digits.length - 1;
  var stop = false;

  while (i >= 0 && !stop) {
    var currentEl = digits[i];

    if (currentEl === 9) {
      digits[i] = 0;
      carryOver = 1;
      
      if (i === 0) {
        digits[i] = 1;
        digits.push(0);
      }
    } else {
      digits[i] = currentEl + 1;
      stop = true;
    }
    i--;
  }

  return digits;
};