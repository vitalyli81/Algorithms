/**
 * 
 * @param {number[]} A 
 * @param {number} start 
 * @param {number} end 
 */

function mergeSort(A, start, end) {
  if (start < end) {
    var mid = Math.floor((start + end));
    mergeSort(A, start, mid); // left
    mergeSort(A, mid + 1, end); // right
    merge(A, start, mid, end); // merge
  }
}

/**
 * 
 * @param {number[]} A
 * @param {number} start
 * @param {number} mid
 * @param {number} end 
 */

function merge(A, start, mid, end) {
  // implement merge here
}