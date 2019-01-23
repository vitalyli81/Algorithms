/**
 * 
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 */

/**
* @param {number} num
* @return {string}
*/
var intToRoman = function (num) {
  const ROMANS = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let i = 0; i < ROMANS.length; i++) {
    const [roman, n] = ROMANS[i];
    while (num >= n) {
      result += roman;
      num -= n;
    }
  }

  return result;
};
