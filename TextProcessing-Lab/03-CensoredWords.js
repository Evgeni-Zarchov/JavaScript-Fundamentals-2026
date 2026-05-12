function censoredWords(str, word) {
    let censored = "*".repeat(word.length);

    let result = str.replaceAll(word, censored);

    console.log(result);

}

censoredWords('A small sentence with some words', 'small');