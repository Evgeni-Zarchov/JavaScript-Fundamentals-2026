function houseParty(arr) {
    let guestList = [];

    for (let action of arr) {
        let name = action.split(" ")[0];

        if (action.includes("is going!")) {

            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }

        } else if (action.includes("is not going!")) {

            if (guestList.includes(name)) {

                let guestToRemove = guestList.indexOf(name);
                guestList.splice(guestToRemove, 1);

            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guestList.join(" \n "));
}

houseParty(['Allie is going!'
    , 'George is going!'
    , 'John is not going!'
    , 'George is not going!']);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);