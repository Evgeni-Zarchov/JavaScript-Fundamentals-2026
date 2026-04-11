function townInfo(obj) {
    for (let key in obj) {
        let value = obj[key];

        console.log(`${key} -> ${value}`);
    }
}

townInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});