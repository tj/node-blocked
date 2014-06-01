
module.exports = function(fn, threshold) {
  threshold = threshold || 10;
  var start = process.hrtime()
  var interval = 100;

  setInterval(function(){
    var delta = process.hrtime(start);
    var nanosec = delta[0] * 1e9 + delta[1];
    var ms = nanosec / 1e6;
    var n = ms - interval;
    if (n > threshold) fn(n)
    start = process.hrtime();
  }, interval);
};