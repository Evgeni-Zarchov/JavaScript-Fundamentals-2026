function arrayRotation(arr, numberOfRotations) {
    for (let rotations = 1; rotations <= numberOfRotations; rotations++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5, 2);