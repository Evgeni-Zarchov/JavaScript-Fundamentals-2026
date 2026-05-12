function occurrence(str, searchedWord) {

    let strAsArray = str.split(" ");
    let counter = 0;

    for (let el of strAsArray) {
        if (el === searchedWord) {
            counter++;
        }
    }

    console.log(counter);

}

occurrence('This is a word and it also is a sentence',
    'is');