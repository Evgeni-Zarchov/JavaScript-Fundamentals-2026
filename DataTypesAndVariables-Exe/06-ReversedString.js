function reversedStr(str) {
    let resultStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let letter = str[i];

        resultStr += letter;
    }

    console.log(resultStr);
}

reversedStr('Information');
reversedStr('star');
reversedStr('racecar');