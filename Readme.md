
# blocked

  Check if a node event loop is blocked.

## Installation

```
$ npm install blocked
```

## Example

  The `blocked(fn[, n])` function reports every value over `n` ms to `fn`, do whatever
  you want with that value, graph it, log it, alert, etc. `n` defaults to 10ms.

```js
var blocked = require('blocked');

setInterval(function(){
  Array(10000000).join('a')
}, 500);

setInterval(function(){
  Array(100000000).join('a')
}, 3000);

blocked(function(ms){
  console.log('BLOCKED FOR %sms', ms | 0);
});
```

# License

  MIT