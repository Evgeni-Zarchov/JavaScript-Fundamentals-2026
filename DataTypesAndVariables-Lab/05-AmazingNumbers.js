function amazingNumbers(number) {
    let sum = 0;
    let numberAsString = String(number);

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    if (sum.toString().includes("9")) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);