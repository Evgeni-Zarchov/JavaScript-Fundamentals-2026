function sumEvenNumbers(strArr) {
    let evenNumbers = 0;

    for (const el of strArr) {
        let evens = Number(el);

        if (evens % 2 == 0) {
            evenNumbers += evens;
        }
    }

    console.log(evenNumbers);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);