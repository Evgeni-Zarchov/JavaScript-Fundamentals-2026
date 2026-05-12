function minerTask(arr) {
    let minerMatrerials = {};

    for (let i = 0; i < arr.length; i += 2) {
        let matrerial = arr[i];
        let quantity = Number(arr[i + 1]);

        if (matrerial in minerMatrerials) {
            minerMatrerials[matrerial] += quantity;
        } else {
            minerMatrerials[matrerial] = quantity;
        }

    }

    let minerEntries = Object.entries(minerMatrerials);

    for (let [material, quantity] of minerEntries) {
        console.log(`${material} -> ${quantity}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);