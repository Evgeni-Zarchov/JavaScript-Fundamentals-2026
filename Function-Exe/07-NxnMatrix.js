function matrix(num) {
    let result = "";

    for (let i = 0; i < num; i++) {

        for (let k = 0; k < num; k++) {

            result += num + " ";
        }

        result += "\n";

    }

    console.log(result);

}

matrix(3);