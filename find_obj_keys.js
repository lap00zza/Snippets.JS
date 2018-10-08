var output = msg => console.log(msg)
// hash for test purposes
window.hash = {
    one: {
        a: 1
    },
    two: {
        b: 2
    },
    three: {
        c: {
            muh: 'my value'
        }
    }
};

function findKey(objName, search, path) {
    var isString = typeof objName === 'string',
        obj = isString ? resolvePath(objName) : objName;

    if (!obj) throw new Error('Given object doesn\'t exist');

    for (var key in obj) {
        path = path || (isString ? objName + "." : "Object.");

        if (key === search) {
            // do what ever u want with ur result
            output(
                ['Found', key, 'in', path, 'with value=' +  obj[key]].join(' ')
            );
        }

        if (typeof obj[key] === 'object') {
            path += key + ".";
            findKey(obj[key], search, path);
        }

        path = '';
    }
}

function resolvePath(path) {
    var obj = window,
        parts = path.split("."),
        len = parts.length,
        key;

    for (var i = 0; i < len; i++) {
        key = parts[i];
        if (!obj[key]) throw new Error('there\'s no object ' + path);
        obj = obj[key];
    }

    return obj;
}

// examples
findKey('hash', 'muh');
findKey('hash', 'b');
findKey('hash.three', 'muh');
findKey(hash, 'muh');

try { findKey('hash.foo', 'moep'); } catch (e) { output(e.message); }
try { findKey(hash.foo, 'moep'); } catch (e) { output(e.message); }
