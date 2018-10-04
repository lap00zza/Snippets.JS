// reduce int number to single value

let n = 12345;
let sum = 0;

while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);
