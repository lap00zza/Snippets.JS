function counter(init) {
  var count = (init) ? init : 0;

  return function() {
    return ++count;
  }
}

// Example
const startFromFive = counter(5);
startFromFive(); //6
startFromFive(); //7
