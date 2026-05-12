function registerBook(arr) {
    let phoneBook = {};

    for (let info of arr) {
        let [name, number] = info.split(" ");

        phoneBook[name] = number;
    }

    for (let key in phoneBook) {
        let value = phoneBook[key];

        console.log(`${key} -> ${value}`);
    }

}

registerBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);