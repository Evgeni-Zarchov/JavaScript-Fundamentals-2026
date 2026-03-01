function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (const nums of arr) {

        if (nums % 2 == 0) {
            evenSum += nums;
        } else {
            oddSum += nums;
        }
    }

    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);