function mergeArrays(firstArr, secondArr) {
    let thirdArray = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            let firstArrAsNumber = Number(firstArr[i]);
            let secondArrAsNumber = Number(secondArr[i]);

            thirdArray.push(firstArrAsNumber + secondArrAsNumber);
        } else {
            let firstArrAsString = firstArr[i];
            let secondArrAsString = secondArr[i];

            thirdArray.push(firstArrAsString + secondArrAsString);
        }
    }

    console.log(thirdArray.join(" - "));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);