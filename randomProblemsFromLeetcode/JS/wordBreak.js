/**
 * 
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 * 
 * Note:
 * 
 * The same word in the dictionary may be reused multiple times in the segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * Example 1:
 * 
 * Input: s = "hellonewworld", wordDict = ["hello", "new", "world"]
 * Output: true
 * Explanation: Return true because "hellonewworld" can be segmented as "hello new world".
 * 
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if (!wordDict.length && !s.length || !wordDict.length) return false;

  var stop = false;
  var i = 0;
  var obj = {};

  while (!stop &&  i < wordDict.length) {
    let val = wordDict[i];
    if (s.indexOf(val) === -1  && !obj[val]) {
      stop = true;
    } else {
      let temp = s.split(val);
      if (!temp.length && !obj[val]) {
        stop = true;
      }
      obj[val] = 1;
      s = temp.join('');
    }
    i++;
  }

  return !stop;
};
