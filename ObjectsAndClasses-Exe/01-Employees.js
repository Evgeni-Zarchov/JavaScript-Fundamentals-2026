function company(names) {
    for (let name of names) {
        let nameObj = {
            name: name,
            id: name.length
        };

        console.log(`Name: ${nameObj.name} -- Personal Number: ${nameObj.id}`);
    }
}

company([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);