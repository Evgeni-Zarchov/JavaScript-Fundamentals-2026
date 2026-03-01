// Reverse Array.

function reverseArray(n, arr) {

    let reversedArr = [];

    for (let i = 0; i < n; i++) {
        reversedArr.push(arr[i]);
    }

    // The method reverse mutate the array and return a new.
    let newArr = reversedArr.reverse();
    // Output.
    console.log(newArr.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]); // expect 30 20 10
reverseArray(4, [-1, 20, 99, 5]); // 5 99 20 -1
reverseArray(2, [66, 43, 75, 89, 47]); // 43 66