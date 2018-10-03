// interview question:
// implement a function to add numbers in manner:
// add(a)(b)(c)(d)...(e)
//
// run in chrome

function add(a) {
  let sum = function (b) {
    return add(a + b);
  };
  sum.toString = sum.valueOf = function () {
    return a;
  };
  return sum;
}

console.log(add(1)(2)(3)(4));
