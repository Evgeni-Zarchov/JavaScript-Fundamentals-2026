function sumFirstLast(arr) {
    // NOTE. The array is array of strings so i have to map the array to convert them into numbers.

    let numArr = arr.map((x) => Number(x)); // Returns array of numbers.

    // Gets first element of the array.
    let firstEl = numArr.shift();
    // Gets last element of the array.
    let lastEl = numArr.pop();

    let result = firstEl + lastEl;

    console.log(result);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);