/**
 * 
 * Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer.
 * If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
 */

function caesarCipher(s, n) {
  var shift = n % 26;

  if (shift === 0) return s;

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var alphabetHash = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10,
    'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20,
    'v': 21, 'w': 22, 'x': 23, 'y': 25, 'z': 26
  }

  var result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let charCode = char.charCodeAt();

    if (charCode >= 65 && charCode <= 90) { // check upper case
      result += alphabet[__getShiftIndex(shift, alphabetHash[char.toLowerCase()])].toUpperCase();
    } else if (charCode >= 97 && charCode <= 122) { // check lower case
      result += alphabet[__getShiftIndex(shift, alphabetHash[char])];
    } else {
      result += char;
    }
  }

  return result;
}

// function to get shifted index
function __getShiftIndex(shift, ind) {
  var direction = shift >= 0 ? 1 : -1;
  var tempShift;

  if (direction >= 0) {
    tempShift = ind + shift <= 26 ? ind + shift : ind + shift - 26

    return tempShift;
  }

  tempShift = ind - shift >= 0 ? ind - shift : ind + 26 + shift;

  return tempShift;
}
