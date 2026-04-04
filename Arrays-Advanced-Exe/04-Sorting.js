function sorting(arr) {
    let result = arr.sort((a, b) => b - a);
    let mixedSort = [];

    let middlePart = Math.ceil(result.length / 2);

    for (let i = 0; i < middlePart; i++) {
        let firstEl = result.shift();
        let lastEl = result.pop();

        mixedSort.push(firstEl);
        mixedSort.push(lastEl);
    }

    console.log(mixedSort.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);