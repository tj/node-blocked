
module.exports = function (fn, options) {
    var opts = options || {};
    var start = process.hrtime();
    var interval = opts.interval || 100;
    var threshold = opts.threshold || 10;

    return setInterval(function () {
        var delta = process.hrtime(start);
        var nanosec = delta[0] * 1e9 + delta[1];
        var ms = nanosec / 1e6;
        var n = ms - interval;

        if (n > threshold) {
            fn(Math.round(n));
        }
        start = process.hrtime();
    }, interval).unref();
};

