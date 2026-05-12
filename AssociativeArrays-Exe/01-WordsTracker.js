function wordTracker(arr) {
    let wordOccurrence = {};
    let searchedWords = arr.shift().split(" ");

    for (let word of searchedWords) {
        wordOccurrence[word] = 0;
    }

    for (let word of arr) {

        if (word in wordOccurrence) {
            wordOccurrence[word]++;
        }
    }

    let entries = Object.entries(wordOccurrence);

    let sortedWords = entries.sort((a, b) => b[1] - a[1]);

    for (let [word, occurence] of sortedWords) {

        console.log(`${word} - ${occurence}`);

    }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);