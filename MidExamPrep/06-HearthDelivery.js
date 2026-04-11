function hearthDelivery(arr) {
    let houses = arr.shift().split("@").map(x => Number(x));

    let position = 0;

    let command = arr.shift();

    while (command !== "Love!") {
        let tokens = command.split(" ");

        let action = tokens.shift();
        let index = Number(tokens.shift());

        if (action === "Jump") {
            position += index;

            if (position >= houses.length) {
                position = 0;
            }

            if (houses[position] === 0) {
                console.log(`Place ${position} already had Valentine's day.`);


            } else {

                houses[position] -= 2;

                if (houses[position] === 0) {
                    console.log(`Place ${position} has Valentine's day.`);

                }
            }

        }

        command = arr.shift();

    }

    console.log(`Cupid's last position was ${position}.`);

    let nonUsingHearthHouse = houses.filter(houses => houses !== 0);

    if (nonUsingHearthHouse.length === 0) {

        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${nonUsingHearthHouse.length} places.`);

    }

}

hearthDelivery(([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]));