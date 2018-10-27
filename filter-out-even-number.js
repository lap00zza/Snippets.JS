const filterOutEvenNumber = (...rest) => rest.filter(number => number % 2 !== 0);
// Example
console.log(filterOutEvenNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
