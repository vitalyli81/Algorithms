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

 function TinyURL () {
  this.hashShort = {};
  this.hashLong = {};
 }

 TinyURL.prototype.randomString = function (length) {
  var result = '';
  var alphaNum = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = length; i > 0; i--) {
    result += alphaNum[Math.floor(Math.random() * alphaNum.length)]
  }

  return result;
}



TinyURL.prototype.encode = function (longUrl) {
  if (this.hashLong[longUrl]) return this.hashLong[longUrl];

  var shortUrl = '';

  while (!shortUrl || this.hashShort[shortUrl]) {
    shortUrl = `http://tinyurl.com/${this.randomString(15)}`;
  };
  this.hashShort[shortUrl] = `${longUrl}`;
  this.hashLong[longUrl] = shortUrl;
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
TinyURL.prototype.decode = function (shortUrl) {
  return this.hashShort[shortUrl];
};
