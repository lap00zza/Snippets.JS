// reduce array to object with item : count scheme

let cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
let carsObj = cars.reduce((obj, name) => {
  obj[name] = obj[name] ? ++obj[name] : 1;
  return obj;
}, {});

console.log(carsObj);