function townInfo(arr) {
    for (let info of arr) {
        let [town, latitude, longitude] = info.split(" | ");

        latitude = Number(latitude);
        longitude = Number(longitude);

        let townObj = {
            town: town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        // console.log(`{ town: '${townObj.town}', latitude: '${townObj.latitude}', longitude: '${townObj.longitude}' }`);

        console.log(townObj);
    }
}

townInfo([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);