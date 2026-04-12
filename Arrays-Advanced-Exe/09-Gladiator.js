function inventory(arr) {
    let storage = arr.shift().split(" ");

    for (let commands of arr) {
        let tokens = commands.split(" ");

        let action = tokens[0];
        let weapons = tokens[1];

        if (action === "Buy") {
            if (!storage.includes(weapons)) {

                storage.push(weapons);
            }

        } else if (action === "Trash") {

            if (storage.includes(weapons)) {

                let idx = storage.indexOf(weapons);
                storage.splice(idx, 1);

            }

        } else if (action === "Repair") {

            if (storage.includes(weapons)) {

                let idx = storage.indexOf(weapons);
                let item = storage.splice(idx, 1);
                storage.push(item);

            }

        } else if (action === "Upgrade") {

            let upgrade = weapons.split("-");

            if (storage.includes(upgrade[0])) {

                let idx = storage.indexOf(upgrade[0]);
                let itemUpgraded = `${upgrade[0]}:${upgrade[1]}`;

                storage.splice(idx + 1, 0, itemUpgraded);
            }
        }
    }

    console.log(storage.join(" "));
}

// inventory([
//     'SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel']);

inventory([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);