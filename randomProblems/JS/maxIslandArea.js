/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (grid.length == 0) return 0;

  var result = 0;
  var temp = 0;

  for (let i = 0; i < grid.length; i++) {

    // scan rows
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        temp = dfsSearch(grid, i, j);
        result = Math.max(temp, result);
      }
    }

  }

  return result;
};

var dfsSearch = function (A, i, j) {
  var jLen = A[0].length;
  var iLen = A.length;

  if (i < 0 || j < 0 || i >= iLen || j >= jLen || A[i][j] == 0) return 0;

  A[i][j] = 0;
  
  var res = dfsSearch(A, i, j + 1) + dfsSearch(A, i, j - 1) + dfsSearch(A, i + 1, j) + dfsSearch(A, i - 1, j) + 1;

  return res;
};
