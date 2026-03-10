function factorial(firstNum, secondNum) {
    let factorial1 = 1;
    let factorial2 = 1;

    for (let i = 1; i <= firstNum; i++) {
        factorial1 *= i;
    }

    for (let k = 1; k <= secondNum; k++) {
        factorial2 *= k;
    }
    let result = factorial1 / factorial2;
    console.log(`${result.toFixed(2)}`);
}

factorial(5, 2);