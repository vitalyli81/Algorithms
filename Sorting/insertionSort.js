/**
 * JS implementation of Insertion sort. In-place sorting.
 * Worst case time scenario O(n^2).
 */

/**
 * @param {number[]} arr
 * 
 */

var InsertionSort = function (arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j]; // key to compare to
    let i = j - 1; // index of prev elem

    // insert key into sorted sequence
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]; // swap elems
      i--;
      
    }
    arr[i + 1] = key;
  }
}
