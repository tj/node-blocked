'use strict';

var blocked = require('./../index');

describe('Blocked', function () {

    afterEach(function () {
       clearInterval(this.interval);
    });

    it('should accept the new options param', function (done) {
        setInterval(function () { new Array(10000000).join('a'); }, 500);

        this.interval = blocked(function () {
            done();
        }, {threshold: 1});
    });

    it('can set the interval options param', function (done) {
        setInterval(function () { new Array(10000000).join('a'); }, 500);

        this.interval = blocked(function () {
            done();
        }, {interval: 450});
    });

    it('should not break backwards compatibility', function (done) {
        setInterval(function () { new Array(10000000).join('a'); }, 500);

        this.interval = blocked(function () {
            done();
        });
    });

});
