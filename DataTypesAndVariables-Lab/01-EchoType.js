function echoType(str) {
    let type = typeof (str);

    console.log(type);

    if (type == "string" || type == "number") {
        console.log(str);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);