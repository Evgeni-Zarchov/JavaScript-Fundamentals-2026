function equalArrays(firstArr, secondArr) {
    let sum = 0;
    let isEquals = true;

    for (let i = 0; i < firstArr.length; i++) {
        let firstArrElements = Number(firstArr[i]);
        let secondArrElements = Number(secondArr[i]);

        if (firstArrElements === secondArrElements) {

            sum += firstArrElements;

        } else {

            console.log(`Arrays are not identical. Found difference at ${i} index`);

            isEquals = false;
            break;
        }
    }

    if (isEquals) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(
    ['10', '20', '30'],
    ['10', '20', '30']);
equalArrays(
    ['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5']);

// equalArrays(['1'], ['10']);