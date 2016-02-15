
# blocked

  Check if a node event loop is blocked.

## Installation

```
$ npm install blocked
```

## Example

  The `blocked()` function reports every value over 10ms, do whatever
  you want with that value, graph it, log it, alert, etc.

  The process won't be kept open through this!

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

## Params and return value

```
var timer = blocked(fn, options);
```

* fn: The callback function to execute when the event loop is blocked. Will send in the amnount of time in ms that the event loop was blocked.
* options: _Optional._ Options object to configure the behaviour. For now, only the `threshold` option is supported. It determines the amount of ms used to determine if the function callback should be executed; useful to speed up tests 


```
blocked(function(ms) {
    console.log("Blocked");
}, {threshold:1});
```
  
Returns: A reference to the timer. Useful for clearing the timer. 

```
var timer = blocked(function(ms) {
                console.log("Blocked");
            }, {threshold:1});
clearInterval(timer);
```


# License

  MIT
