const myArray = [1, 'String', {}, null, false, [1, 2, 3], { validObject: 1 }, Symbol('abc'), undefined];
myArray.filter(Boolean); // [1, "String", {}, [1, 2, 3], { "validObject": 1 }, null]

