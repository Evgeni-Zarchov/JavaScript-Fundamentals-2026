function townInfo(townName, population, area) {
    let townLength = townName.length >= 3;
    let isPositivePopulation = population >= 0;
    let isPositiveArea = area >= 0;
    if (!townLength) {
        console.log("Town name must be at least 3 characters!");
    }

    if (!isPositivePopulation) {
        console.log(`Population must be a positive number!`);
    }

    if (!isPositiveArea) {
        console.log(`Area must be a positive number!`);
    }

    if (townLength && isPositivePopulation && isPositiveArea) {

        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
    }
}

townInfo(
    'Sofia',
    1286383,
    492);
townInfo(
    'LA',
    1481353,
    512);
townInfo(
    'Plovdiv',
    -45000,
    100);
townInfo(
    'Ka',
    3600,
    -50);