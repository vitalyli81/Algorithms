/**
 * 
 * Write a function that takes a string as input and reverse only the vowels of a string.
 * 
 * Example 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * Input: "hello world"
 * Output: "hollo werld"
 * 
 * Input: "binary tree and graphs"
 * Output: "banary tree and griphs"
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var vowelHash = {
    'A': 'A',
    'E': 'E',
    'I': 'I',
    'O': 'O',
    'U': 'U',
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u'
  };

  var array = s.split('');
  var i = 0, j = array.length - 1;

  while (i < j) {
    var el1 = array[i];
    var el2 = array[j];

    if (!vowelHash[el1]) {
      i++;
    } else if (!vowelHash[el2]) {
        j--;
    } else {
      array[i] = el2;
      array[j] = el1;
      i++;
      j--;
    }
  }

  return array.join('');
};