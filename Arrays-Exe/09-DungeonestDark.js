function dungeon(input) {
    let hp = 100;
    let gold = 0;
    let bestRoom = 0;

    let isStillAlive = true;

    let map = input.split("|");

    for (let tokens of map) {

        let command = tokens.split(" ");
        let action = command[0]
        let dmgGoldOrHeal = Number(command[1]);

        bestRoom++;
        if (action === "chest") {
            let coins = gold + dmgGoldOrHeal;
            console.log(`You found ${dmgGoldOrHeal} coins.`);
            gold = coins;
            continue;
        } else if (action === "potion") {

            if (hp + dmgGoldOrHeal > 100) {
                dmgGoldOrHeal = 100 - hp;
            }

            hp += dmgGoldOrHeal;
            console.log(`You healed for ${dmgGoldOrHeal} hp.`);
            console.log(`Current health: ${hp} hp.`);
            continue;
        } else {


            if (hp - dmgGoldOrHeal <= 0) {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${bestRoom}`);

                isStillAlive = false;
                break;


            } else {
                hp -= dmgGoldOrHeal;
                console.log(`You slayed ${action}.`);
            }
        }

    }

    if (isStillAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${gold}`);
        console.log(`Health: ${hp}`);
    }

}

// dungeon("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

dungeon("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");