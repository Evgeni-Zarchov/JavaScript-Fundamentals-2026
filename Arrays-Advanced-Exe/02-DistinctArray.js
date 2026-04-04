function removeRepeatingElements(arr) {
    let elements = [];

    for (let i = 0; i < arr.length; i++) {
        if (!elements.includes(arr[i])) {
            elements.push(arr[i]);
        }
    }

    console.log(elements.join(" "));
}

removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);