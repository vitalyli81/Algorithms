/**
 * 
 * @param {number[]} A 
 * @param {number} start 
 * @param {number} end 
 */

function sort(A) {
  if (!A || A.length < 2) return A;

  mergeSort(A, 0, A.length - 1);
}

function mergeSort(A, start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
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
  var len1 = mid - start + 1; //  length of left sub array
  var len2 = end - mid;  // length of right sub array
  var a1 = Array(len1); // left temp array
  var a2 = Array(len2); // right temp array
  var i = 0, j = 0;

  // populating arrays 
  for (let k = 0; k < len1; k++) {
    a1[k] = A[start + k];
  }
  a1.push(Infinity); // adding sentinel to the end

  for (let l = 0; l < len2; l++) {
    a2[l] = A[mid + l + 1];
  }
  a2.push(Infinity); // adding sentinel to the end

  for (let k = start; k <= end; k++) {
    if (a1[i] <= a2[j]) {
      A[k] = a1[i];
      i++;
    } else {
      A[k] = a2[j];
      j++;
    }
  }

}