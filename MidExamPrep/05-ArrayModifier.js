function arrayModifier(arr) {
    let arrayOfNumbers = arr.shift().split(" ").map(x => Number(x));

    let command = arr.shift();

    while (command !== "end") {
        let tokens = command.split(" ");

        let action = tokens.shift();
        let firstIndex = Number(tokens.shift());
        let secondIndex = Number(tokens.shift());

        if (action === "swap") {
            let firstNum = arrayOfNumbers[firstIndex];
            let secondNum = arrayOfNumbers[secondIndex];

            arrayOfNumbers[firstIndex] = secondNum;
            arrayOfNumbers[secondIndex] = firstNum;

        } else if (action === "multiply") {
            let result = arrayOfNumbers[firstIndex] * arrayOfNumbers[secondIndex];
            arrayOfNumbers[firstIndex] = result;

        } else if (action === "decrease") {
            for (let i = 0; i < arrayOfNumbers.length; i++) {
                arrayOfNumbers[i] -= 1;
            }
        }


        command = arr.shift();
    }

    console.log(arrayOfNumbers.join(", "));


}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);