/**
 * 
 * Design the encode and decode methods for the TinyURL service.
 * There is no restriction on how your encode/decode algorithm should work.
 * You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
 */

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

var alphaNum = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var hashShort = {};
var hashLong = {};

function randomString(length, string) {
  var result = '';
  for (let i = length; i > 0; i--) {
    result += string[Math.floor(Math.random() * string.length)]
  }

  return result;
}

var encode = function (longUrl) {
  if (hashLong[longUrl]) return hashLong[longUrl];

  var shortUrl = '';

  while (!shortUrl || hashShort[shortUrl]) {
    shortUrl = `http://tinyurl.com/${randomString(15, alphaNum)}`;
  };
  hashShort[shortUrl] = `${longUrl}`;
  hashLong[longUrl] = shortUrl;
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return hashShort[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */