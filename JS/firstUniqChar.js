/**
 * 
 * Given a string, find the first non-repeating character in it and return it's index. 
 * If it doesn't exist, return -1.
 * Example :
 * 'abbccd' returns 0
 * 'ababc' returns 4
 * 'aabbcc' returns -1
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var array = s.split('');
    var unique = new Set();
    var symHash = {};

    for (let i = 0; i < array.length; i++ ) {
      var el = array[i];

      if (symHash[el] === undefined) {
        unique.add(el);
        symHash[el] = i;
      } else {
        unique.delete(el);
      }
    }

    return !unique.size && -1 || symHash[unique.values().next().value];
};