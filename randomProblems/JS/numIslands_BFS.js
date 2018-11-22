// BSF solution

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length == 0) return 0;

  var numC = grid[0].length;
  var numR = grid.length;
  var result = 0;
  var queue = new Queue();

  for (let r = 0; r < numR; r++) {
    for (let c = 0; c < numC; c++) {
      if (grid[r][c] == 1) {
        result++;
        grid[r][c] = "0"; // mark as visited

        // add coordinates to queue for fronier calculation
        queue.enqueue({
          row: r,
          col: c
        });

        while (queue.size) {
          let frontier = queue.dequeue();
          let rowF = frontier.row;
          let colF = frontier.col;

          // right
          if (colF + 1 < numC && grid[rowF][colF + 1] == 1) {
            grid[rowF][colF + 1] = "0";
            queue.enqueue({
              row: rowF,
              col: colF + 1
            });
          }

          // left
          if (colF - 1 >= 0 && grid[rowF][colF - 1] == 1) {
            grid[rowF][colF - 1] = "0";
            queue.enqueue({
              row: rowF,
              col: colF - 1
            });
          }

          // top
          if (rowF - 1 >= 0 && grid[rowF - 1][colF] == 1) {
            grid[rowF - 1][colF] = "0";
            queue.enqueue({
              row: rowF - 1,
              col: colF
            });
          }

          // bottom
          if (rowF + 1 < numR && grid[rowF + 1][colF] == 1) {
            grid[rowF + 1][colF] = "0";
            queue.enqueue({
              row: rowF + 1,
              col: colF
            });
          }

        }
      }
    }
  }

  return result;

}

/**
 * Queue data structure 
 * First in First out
 */

function Queue() {
  this.data = {};
  this.size = 0;
  this.tail = 0;
  this.head = 0;
}

Queue.prototype.enqueue = function (val) {
  this.tail++;
  this.data[this.tail] = val;
  this.size++;
}

Queue.prototype.dequeue = function () {
  if (this.size < 1) return;

  this.head++;
  var elem = this.data[this.head];

  delete this.data[this.head];

  this.size--;

  if (this.size == 0) {
    this.tail = 0;
    this.head = 0;
  }

  return elem;
}