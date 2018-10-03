// remove repeating items from an array

const uniqueArray = arr => [...new Set(arr)];

console.log(uniqueArray([1, 2, 3, 4, 5, 6, 1, 1, 2, 3, 4]));
console.log(uniqueArray(["last jedi", "avengers", "batman", "last jedi"]));