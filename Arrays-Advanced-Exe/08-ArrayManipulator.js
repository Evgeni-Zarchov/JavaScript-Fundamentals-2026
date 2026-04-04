// HomeWork To-do some functions 
function manipulateArray(arr, commandsArr) {
    let arrToManipulate = arr;

    for (let command of commandsArr) {
        let action = command.split(" ");

        if (action[0] === "add") {

            let index = Number(action[1]);
            let element = Number(action[2]);

            arrToManipulate.splice(index, 0, element);

        } else if (action[0] === "addMany") {

            let index = Number(action[1]);
            let elements = action.slice(2).map((x) => Number(x));

            for (let i = elements.length - 1; i >= 0; i--) {

                let el = elements[i];

                arrToManipulate.splice(index, 0, el);
            }

        } else if (action[0] === "contains") {

            let el = Number(action[1]);

            let findEl = arrToManipulate.indexOf(el);

            console.log(findEl);

        } else if (action[0] === "remove") {

            let index = Number(action[1]);

            arrToManipulate.splice(index, 1);

        } else if (action[0] === "shift") {

            let positions = Number(action[1]);

            for (let i = 1; i <= positions; i++) {

                let firstEl = arrToManipulate.shift();

                arrToManipulate.push(firstEl);
            }

        } else if (action[0] === "sumPairs") {

            let result = [];
            for (let i = 0; i < arrToManipulate.length; i += 2) {
                let firstEl = Number(arrToManipulate[i]);
                let secondEl = 0;

                if (i + 1 < arrToManipulate.length) {
                    secondEl = arrToManipulate[i + 1];
                    result.push(firstEl + secondEl);
                }
            }
            arrToManipulate = result;

        } else if (action[0] === "print") {
            console.log(`[ ${arrToManipulate.join(", ")} ]`);
            break;
        }

    }

}

// manipulateArray([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

// manipulateArray([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

manipulateArray([2, 2, 4, 2, 4]
    , ["add 1 4", "sumPairs", "print"]);