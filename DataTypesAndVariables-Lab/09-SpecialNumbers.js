function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let digit = i;
        let sum = 0;

        while (digit != 0) {
            sum += digit % 10;
            digit = Math.trunc(digit / 10);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

}

specialNumbers(15);
specialNumbers(20);