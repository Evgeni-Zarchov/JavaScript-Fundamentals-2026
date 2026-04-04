function bomb(arr, bombInfo) {
    let target = Number(bombInfo[0]);
    let power = Number(bombInfo[1]);

    let searchedTarget = arr.indexOf(target);

    while (searchedTarget !== -1) {
        let leftTarget = searchedTarget - power;

        if (leftTarget < 0) {
            leftTarget = 0;
        }

        let rightTarget = searchedTarget + power;

        if (rightTarget >= arr.length) {
            rightTarget = arr.length - 1;
        }

        let killedTargets = rightTarget - leftTarget + 1;

        arr.splice(leftTarget, killedTargets);

        searchedTarget = arr.indexOf(target);
    }

    let sum = arr.reduce((acc, value) => {
        return acc + value;
    }, 0);

    console.log(sum);

}

// bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);

// bomb([1, 4, 4, 2, 8, 9, 1],
// [9, 3]);

// bomb([1, 7, 7, 1, 2, 3],
// [7, 1]);

bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);