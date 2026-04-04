function shop(arr) {
    let productList = arr.shift().split("!");

    for (let product of arr) {
        let commands = product.split(" ");

        let action = commands[0];

        for (let i = 0; i < arr.length; i++) {

            if (action === "Urgent") {

                let item = commands[1];

                if (!productList.includes(item)) {
                    productList.unshift(item);
                    continue;
                }

            } else if (action === "Unnecessary") {
                let item = commands[1];


                if (productList.includes(item)) {
                    let idx = productList.indexOf(item);
                    productList.splice(idx, 1);
                    continue;
                }
            } else if (action === "Correct") {
                
                let oldProduct = commands[1];
                let newProduct = commands[2];
                let idx = productList.indexOf(oldProduct);

                if (productList.includes(oldProduct)) {
                    productList[idx] = newProduct;
                    continue;
                }
            } else if (action === "Rearrange") {
                let item = commands[1];


                if (productList.includes(item)) {

                    let idx = productList.indexOf(item);
                    let itemToPush = productList.splice(idx, 1);
                    productList.push(itemToPush);
                    continue;
                }
            }
        }

    }

    console.log(productList.join(", "));

}

shop((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]));

shop((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]));
