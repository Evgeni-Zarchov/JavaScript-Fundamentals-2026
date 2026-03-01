function sumFirstAndLastElements(arr) {
    // to get first and last element i have to get the index.

    // first element of an array are always on zero position.
    // last element of an array are always on the length of the array - 1.

    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];

    // buffer variable for the result.

    let result = firstElement + lastElement;

    console.log(result);
}

sumFirstAndLastElements([20, 30, 40]);
sumFirstAndLastElements([10, 17, 22, 33]);
sumFirstAndLastElements([11, 58, 69]);