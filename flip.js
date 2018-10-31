 // Reverse the order in which arguments are applied to a function. Note that `flip` only works on
 // binary functions, which take exactly two arguments, but the function it returns is curried.
 // Example
 // const subtract = (x, y) => x - y;
 // const flipped = flip(subtract);
 // subtract(10, 5);                  // => 5
 // flipped(10, 5);                   // => -5
 
 const flip = f => (x, y) => y === undefined ? y => f(y, x) : f(y, x);
