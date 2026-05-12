function gameSimulator(arr) {
    let legendaryShards = { shards: 0, fragments: 0, motes: 0 };

    let legendaryItems = { shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath" };

    let junkMaterials = {};

    let mapAsString = arr.split(" ");

    for (let i = 0; i < mapAsString.length; i += 2) {
        let materialQuantity = Number(mapAsString[i]);
        let items = mapAsString[i + 1].toLowerCase();

        if (items in legendaryShards) {
            legendaryShards[items] += materialQuantity;

            if (legendaryShards[items] >= 250) {
                console.log(`${legendaryItems[items]} obtained!`);
                legendaryShards[items] -= 250;
                break;
            }



        } else {

            if (items in junkMaterials) {
                junkMaterials[items] += materialQuantity;
            } else {
                junkMaterials[items] = materialQuantity;
            }
        }
    }

    let entriesOfLegendary = Object.entries(legendaryShards);

    let sortedLegendaryItems = entriesOfLegendary.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let entriesOfJunk = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [items, quantity] of sortedLegendaryItems) {
        console.log(`${items}: ${quantity}`);
    }

    for (let [items, quantity] of entriesOfJunk) {
        console.log(`${items}: ${quantity}`);
    }

}

// gameSimulator('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

gameSimulator('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');