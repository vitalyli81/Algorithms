function memoize(fn) {
  var cache = {};
  var slice = Array.prototype.slice;

  return function () {
    var key = JSON.stringify(arguments);

    if (key in cache) {
      return cache[key];
    }

    return (cache[key] = fn.apply(this, arguments));
  }
}

var fastFibo = memoize(function (n) {
  if (n < 2) return n;

  return fastFibo(n - 1) + fastFibo(n - 2);
});