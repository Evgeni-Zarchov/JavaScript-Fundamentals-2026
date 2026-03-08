function signCheck(firstNum, secondNum, thirdNum) {
    let result = firstNum * secondNum * thirdNum;

    if (result < 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);