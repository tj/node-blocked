
module.exports = function(fn) {
  var start = process.hrtime()
  var interval = 100;

  var intervalObject = setInterval(function(){
    var delta = process.hrtime(start);
    var nanosec = delta[0] * 1e9 + delta[1];
    var ms = nanosec / 1e6;
    var n = ms - interval;
    if (n > 10) fn(Math.round(n))
    start = process.hrtime();
  }, interval);

  intervalObject.unref();

  return {
      stop: function () {
          clearInterval(intervalObject);
      }
  };
};
