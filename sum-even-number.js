const sumEvenNumber = (...rest) => rest.filter(number => number % 2 !== 0)
    .reduce((accumulated, current) => accumulated + current);

console.log(sumEvenNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));//25
