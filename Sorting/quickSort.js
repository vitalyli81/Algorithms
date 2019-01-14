var sort = function (A) {
  if (A.length < 2) return A;
  quickSort(A, 0, A.length - 1);
}

var quickSort = function (A, startIndex, endIndex) {
  if (startIndex < endIndex) {
    var mid = partition(A, startIndex, endIndex);
    quickSort(A, startIndex, mid - 1);
    quickSort(A, mid + 1, endIndex);
  }
}

var partition = function (A, s, e) {
  var pivot = A[e];
  var y = s; // pointer to index where we will save pivot value
  var temp;

  for (let i = s; i < e; i++) {
    if (A[i] <= pivot) {
      //swap A[y] with A[i]
      if (y !== i) {
        temp = A[y];
        A[y] = A[i];
        A[i] = temp;
      }
      y++;
    }
  }
  // swap A[e] with A[y + 1]
  if (e !== y) {
    A[e] = A[y];
    A[y] = pivot;
  }

  return y;
}