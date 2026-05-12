function party(input) {
    let vip = [];
    let regular = [];

    let guestList = input.shift();

    while (guestList !== "PARTY") {

        if (guestList[0] >= 1 && guestList[0] <= 9) {
            vip.push(guestList);
        } else {
            regular.push(guestList);
        }

        guestList = input.shift();
    }


    for (let el of input) {
        if (vip.includes(el)) {
            let index = vip.indexOf(el);
            vip.splice(index, 1);
        } else {
            let index = regular.indexOf(el);
            regular.splice(index, 1);
        }
    }

    console.log(vip.length + regular.length);
    vip.forEach(el => console.log(el));
    regular.forEach(el => console.log(el));
}

party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);