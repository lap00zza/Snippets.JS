const filterOutOddNumber = (...rest) => rest.filter(number => number % 2 === 0);
// Example
console.log(filterOutOddNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
