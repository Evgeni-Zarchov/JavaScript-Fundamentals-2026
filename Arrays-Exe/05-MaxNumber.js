function maxNumber(arr) {
    let topNums = [];

    for (let i = 0; i < arr.length; i++) {
        let isTop = true;

        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] <= arr[k]) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNums.push(arr[i]);
        }
    }

    console.log(topNums.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);