function convert(jsonObj) {
    let jsonToObj = JSON.parse(jsonObj);

    for (let key in jsonToObj) {
        let value = jsonToObj[key];

        console.log(`${key}: ${value}`);
    }

}

convert('{"name": "George", "age": 40, "town": "Sofia"}');