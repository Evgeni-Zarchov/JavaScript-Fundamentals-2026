function pirate(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {

        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder - (totalPlunder * 0.3);
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = (totalPlunder / expectedPlunder) * 100;

        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }

}

pirate((["5", "40", "100"]));

pirate((["10", "20", "380"]));