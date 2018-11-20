/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length == 0) return 0;

  var result = 0;

  for (let i = 0; i < grid.length; i++) {

    // scan rows
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        result++;
        dfsSearch(grid, i, j);
      }
    }

  }

  return result;
};

var dfsSearch = function (A, i, j) {
  var jLen = A[0].length;
  var iLen = A.length;

  if (i < 0 || j < 0 || i >= iLen || j >= jLen || A[i][j] == 0) return;

  A[i][j] = 0;
  // check right 
  dfsSearch(A, i, j + 1);
  // check left 
  dfsSearch(A, i, j - 1);
  // check top
  dfsSearch(A, i + 1, j);
  // check bottom
  dfsSearch(A, i - 1, j);

};
