
# blocked

  Check if a node event loop is blocked.
  
  If You're running Node.js 8+ you can get a stacktrace pointing to the blocking function using very similar [blocked-at](https://github.com/naugtur/blocked-at) package.

## Installation

```
$ npm install blocked
```

## Description

  The `blocked()` function reports every value over the configured threshold (defaulted to 10ms).  You can then do whatever
  you want with that value, graph it, log it, alert, etc.

  The process won't be kept open through this.

## Params and return value

```js
var timer = blocked(fn, options);
```

* fn: The callback function to execute when the event loop is blocked. Will send in the amount of time in ms that the event loop was blocked.
* options: _Optional._ Options object to configure the behaviour.
  * `threshold` determines the amount of ms used to determine if the function callback should be executed; useful to speed up tests.
  * `interval` determines the frequency with which the event loop is checked in ms.


```js
blocked(function(ms) {
    console.log("Blocked");
}, {threshold:1, interval: 1000});
```
  
Returns: A reference to the timer. Useful for clearing the timer. 

```js
var timer = blocked(function(ms) {
                console.log("Blocked");
            });
clearInterval(timer);
```


# License

MIT
