/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];

  var result = [];
  var c1 = 0;
  var c2 = matrix[0].length - 1;
  var r1 = 0;
  var r2 = matrix.length - 1

  while (c1 <= c2 && r1 <= r2) {
    for (let i = c1; i <= c2; i++) {
      result.push(matrix[r1][i]);
    }
    for (let i = r1 + 1; i <= r2; i++) {
      result.push(matrix[i][c2]);
    }

    if (r1 < r2 && c1 < c2) {
      for (let i = c2 - 1; i >= c1; i--) {
        result.push(matrix[r2][i]);
      }

      for (let i = r2 - 1; i >= r1 + 1; i--) {
        result.push(matrix[i][c1]);
      }
    }

    r1++;
    r2--;
    c1++;
    c2--;
  }

  return result;

};