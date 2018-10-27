const sumOddNumber = (...rest) => rest.filter(number => number % 2 === 0)
    .reduce((accumulated, current) => accumulated + current);
    

console.log(sumOddNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //30
