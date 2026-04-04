function search(arr1, arr2) {
    let newArr = arr1.slice(0, arr2[0]);

    newArr.splice(0, arr2[1]);

    let counter = 0;

    for (let num of newArr) {
        if (num == arr2[2]) {
            counter++;
        }
    }
    console.log(`Number ${arr2[2]} occurs ${counter} times.`);


}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);

search([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);