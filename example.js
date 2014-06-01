
/**
 * Module dependencies.
 */

var blocked = require('./');

setInterval(function(){
  Array(10000000).join('a')
}, 500);

setInterval(function(){
  Array(100000000).join('a')
}, 3000);

blocked(function(ms){
  console.log('BLOCKED FOR %sms', ms | 0);
});