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
var encode = function(longUrl) {
    var url = `http://tinyurl.com/${Math.random()*100000000000000}`;
    hash[url] =  `${longUrl}`;

    return url;
};

var hash = {};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return hash[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */