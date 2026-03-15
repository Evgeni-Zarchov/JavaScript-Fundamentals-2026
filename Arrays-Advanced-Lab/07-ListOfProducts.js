function productList(arrOfElements) {
    let sortedProducts = arrOfElements.sort();

    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`);
    }
}

productList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
productList(['Watermelon', 'Banana', 'Apples']);