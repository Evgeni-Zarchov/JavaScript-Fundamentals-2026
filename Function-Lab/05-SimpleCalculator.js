function calculator(num1, num2, operator) {
    let operations = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b,
    };

    let result = operations[operator](num1, num2);
    console.log(result);
}

calculator(5, 5, "multiply");