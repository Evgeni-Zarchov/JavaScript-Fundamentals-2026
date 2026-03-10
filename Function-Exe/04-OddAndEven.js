function oddAndEvenSum(number) {
    let numAsString = String(number);

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let num = Number(numAsString[i]);

        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);