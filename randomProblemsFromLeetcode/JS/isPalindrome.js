/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var str = '';
  var start = end = 0;

  for (let i = 0; i < s.length; i++) {
    var char = s.charAt(i).toLowerCase();
    if (
      char.charCodeAt() >= 97 && char.charCodeAt() <= 127
      || char.charCodeAt() != 32 && Number(char) >= 0
    ) {
      str += char;
    }
  }
  end = str.length - 1;

  while (start < end) {
    if (str[start] != str[end]) return false;
    start++;
    end--;
  }

  return true;
};
