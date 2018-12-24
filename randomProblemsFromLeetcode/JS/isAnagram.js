/**
 * 
 * Anagrams are words or phrases that contain the same number of characters. 
 * Create a function that checks for this.
 * 
 * Example 
 * 
 * "hello world", "world hello"
 * true
 * 
 * "hellow world", "hello there"
 * false
 * 
 */

/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @return {boolean}
 */

function isAnagram(s1, s2) {
  if (!s1 || !s2 || s1.length !== s2.length) return false;

  var hash = {
    length: 0
  };

  // create hash table - each char is a key and value is number of occurrences
  // also increase property "length"

  for (let i = 0; i < s1.length; i++) {
    let char = s1.charAt(i);
    if (char in hash) {
      hash[char]++;
    } else {
      hash[char] = 0;
      hash.length++;
    }
  }

  // iterate through second string and check each char against hash table 
  // if found then decrement value of char and if value == 0 then delete char from hash and decrement length
  
  for (let i = 0; i < s2.length; i++) {
    let char = s2.charAt(i);

    if (hash[char] > 0) {
      hash[char]--;
    } else if (hash[char] === 0) {
      delete hash[char];
      hash.length--;
    }
  }
  return !hash.length;
}
