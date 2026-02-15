function integerAndFloat(firstNum, secondNum, thirdNum) {

    let sumOfNumbers = firstNum + secondNum + thirdNum;

    if (sumOfNumbers % 1 == 0) {
        console.log(`${sumOfNumbers} - Integer`);
    } else {
        console.log(`${sumOfNumbers} - Float`);
    }
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(10, 50, 60);
integerAndFloat(100, 200, 303);