function repeatStr(str, times) {
    let result = "";

    for (let i = 1; i <= times; i++) {
        result += str;
    }

    console.log(result);
}

repeatStr("abc", 3);
repeatStr("String", 2);
repeatStr("i love you", 10);