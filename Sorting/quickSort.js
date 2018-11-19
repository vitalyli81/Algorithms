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
  var y = s - 1;
  var temp;

  for (let i = s; i < e - 1; i++) {
    if (A[i] <= pivot) {
      y++;
      //swap A[y] with A[i]
      if (y !== i) {
        temp = A[y];
        A[y] = A[i];
        A[i] = temp;
      }
    }
  }
  // swap A[e] with A[y + 1]
  if (e !== y + 1) {
    temp = A[e];
    A[e] = A[y + 1];
    A[y + 1] = temp;
  }

  return y + 1;
}