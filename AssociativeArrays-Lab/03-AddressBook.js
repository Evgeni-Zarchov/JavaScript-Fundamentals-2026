function addressBook(arr) {
    let addressRegister = {};

    for (let info of arr) {
        let [name, address] = info.split(":");

        addressRegister[name] = address;
    }

    let entries = Object.entries(addressRegister);

    let sorted = entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`);

    }
}

// adressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']);

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);