function manipulateArray(arr) {
    let numsArr = arr.shift().split(" ").map(x => Number(x));

    for (const elements of arr) {
        let commands = elements.split(" ");
        let action = commands[0].toLowerCase();

        switch (action) {
            case "add":
                let numberToAdd = Number(commands[1]);
                numsArr.push(numberToAdd);
                break;
            case "remove":
                let numberToRemove = Number(commands[1]);
                let index = numsArr.indexOf(numberToRemove);
                while (index !== -1) {

                    numsArr.splice(index, 1);
                    index = numsArr.indexOf(numberToRemove);

                }
                break;
            case "removeat":
                let numToRemoveAt = Number(commands[1]);
                numsArr.splice(numToRemoveAt, 1);
                break;
            case "insert":
                let numToInsert = Number(commands[1]);
                let indexToInsertAt = Number(commands[2]);
                numsArr.splice(indexToInsertAt, 0, numToInsert);
                break;
        }

    }

    console.log(numsArr.join(" "));
}

manipulateArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);