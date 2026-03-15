function negatgiveOrPositive(arr) {
    let arrOfNumbers = [];

    for (let el of arr) {
        if (el < 0) {
            arrOfNumbers.unshift(el);
        } else {
            arrOfNumbers.push(el);
        }
    }

    console.log(arrOfNumbers.join("\n"));
}

negatgiveOrPositive(['7', '-2', '8', '9']);
negatgiveOrPositive(['3', '-2', '0', '-1']);