// sort a list of numbers and include NaN-Handling
function sort( numA, numB ) {
    let a = parseInt( numA  );
    let b = parseInt( numB );

    return isNaN( a )
        ? 1 - isNaN( b )
        : a === b
            ? 0
            : a < b
                ? 1
                : -1;
}
