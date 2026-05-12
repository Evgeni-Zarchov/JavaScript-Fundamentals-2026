function storage(arr) {
    let shopStorage = new Map();

    for (let info of arr) {

        let items = info.split(" ");

        let product = items[0];
        let quantity = Number(items[1]);

        if (shopStorage.has(product)) {

            quantity += shopStorage.get(product);

        }
        shopStorage.set(product, quantity);

    }

    for (let [items, quantity] of shopStorage) {
        console.log(`${items} -> ${quantity}`);

    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);

storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);