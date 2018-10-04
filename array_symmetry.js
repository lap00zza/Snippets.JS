// check if array is symmetrical

const array1 = ["red", "blue", "yellow", "yellow", "blue", "red" ];
const array2 = [1,2,3,4,3,2,1]
const array3 = [1,2,3,4,3,2]

function symmetry (data){
  for(let i = 0; i < data.length / 2; i++) {
    if (data[i] !== data[data.length -1 - i]) {
      return false;
    } 
  }
  return true;
}

console.log(symmetry(array1));
console.log(symmetry(array2));
console.log(symmetry(array3));
