function shoot(arr) {
    let targets = arr.shift().split(" ").map(x => Number(x));
    let counter = 0;

    let command = arr.shift();

    while (command !== "End") {
        let index = Number(command);

        let currentTarget = targets[index];
        
        for (let i = 0; i < targets.length; i++) {
            
        }

        command = arr.shift();

    }

    console.log(targets);

}

shoot(([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]));