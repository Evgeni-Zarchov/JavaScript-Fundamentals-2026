function sumFirstAndLast(arr) {
    // Standart way to sum first and last.
    // let firstEl = arr[0];
    // let lastEl = arr[arr.length - 1];

    // let sum = firstEl + lastEl;

    // console.log(sum);
    
    // In-Built methods

    let firstNumber = arr.shift();
    let lastNumber = arr.pop();

    let output = firstNumber + lastNumber;

    console.log(output);
}

sumFirstAndLast([20,30,40]);