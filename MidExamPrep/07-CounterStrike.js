function gameSimulation(arr) {
    let battleWon = 0;
    let hp = Number(arr.shift());

    for (let command of arr) {
        let enemy = Number(command);

        if (command === "End of battle") {
            break;
        } else {

            if (hp - enemy < 0) {
                console.log(`Not enough energy! Game ends with ${battleWon} won battles and ${hp} energy`);
                return;

            }

            hp -= enemy;
            battleWon++;

            if (battleWon % 3 === 0) {
                hp += battleWon;
            }
        }

    }

    console.log(`Won battles: ${battleWon}. Energy left: ${hp}`);
}
gameSimulation((
    ["100",
        "10",
        "10",
        "10",
        "1",
        "2",
        "3",
        "73",
        "10"]));

// gameSimulation((
//     ["200",
//         "54",
//         "14",
//         "28",
//         "13",
//         "End of battle"]));