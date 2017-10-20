var add = function (x) {
    return function (y) {
        return x + y;
    }
}

// in ES6
const add = x => y => x + y;
