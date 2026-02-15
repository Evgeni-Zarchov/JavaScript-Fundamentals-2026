function rightPlace(word, letter, textToCompare) {
    let result = "";

    for (let i = 0; i < word.length; i++) {

        if (word[i] == "_") {
            result += letter;
        } else {
            result += word[i];
        }
    }

    if (result == textToCompare) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');