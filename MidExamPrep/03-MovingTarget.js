function movingTarget(arr) {
    function isValidIndex(targets, index) {
        let isValid = index >= 0 && index < targets.length;
        return isValid;
    }
    let targets = arr.shift().split(" ").map(x => Number(x));

    for (let commands of arr) {
        let action = commands.split(" ");

        if (action[0] === "End") {
            break;
        }

        //Shoot the target at the index if it exists by reducing its value by the given power (integer value). 

        if (action[0] === "Shoot") {
            let index = Number(action[1]);
            let power = Number(action[2]);

            if (isValidIndex(targets, index)) {

                //Remove the target if it is shot.
                targets[index] -= power;

                if (targets[index] <= 0) {
                    // A target is considered shot when its value reaches 0.
                    targets.splice(index, 1);
                    continue;
                }
            }
        } else if (action[0] === "Add") {

            let index = Number(action[1]);
            let value = Number(action[1]);

            if (isValidIndex(targets, index)) {

                targets.splice(index, 0, value);
            } else {

                console.log("Invalid placement!");
                continue;
            }

        } else if (action[0] === "Strike") {

            let index = Number(action[1]);
            let radius = Number(action[2]);

            if (!isValidIndex(targets, index)) {
                console.log("Strike missed!");
                continue;
            } else {

                let leftSide = index - radius;
                let rightSide = index + radius;

                let totalTargets = rightSide - leftSide + 1;
                targets.splice(leftSide, totalTargets);

            }
        }
    }

    console.log(targets.join("|"));


}

// movingTarget((["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"]));

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"
]);