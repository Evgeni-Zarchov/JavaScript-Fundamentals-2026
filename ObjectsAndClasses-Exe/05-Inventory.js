function heroes(arr) {
    let heroInfo = [];

    for (let info of arr) {
        let [name, level, weapon] = info.split(" / ");
        level = Number(level);
        let heroesObj = {
            hero: name,
            level: level,
            items: weapon
        };


        heroInfo.push(heroesObj);
    }

    let sortedHeroes = heroInfo.sort((a, b) => a.level - b.level);

    for (let heroes of sortedHeroes) {
        console.log(`Hero: ${heroes.hero}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items}`);
    }

}

heroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

// heroes([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);