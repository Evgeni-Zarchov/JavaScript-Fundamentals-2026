function trainSimulation(arr) {
    let wagons = arr.shift().split(" ").map(x => Number(x));
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if (command[0] === "Add") {
            let currentWagons = Number(command[1]);
            wagons.push(currentWagons);
        } else {
            let peoples = Number(arr[i]);

            for (let k = 0; k < wagons.length; k++) {
                if (wagons[k] + peoples <= maxCapacity) {
                    wagons[k] += peoples;
                    break;
                }
            }
        }


    }
    console.log(wagons.join(" "));
}

trainSimulation(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
trainSimulation(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])