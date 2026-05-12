function oddOccurrence(str) {
    let words = new Map();

    let el = str.split(" ");

    for (let word of el) {
        word = word.toLowerCase();


        if (!words.has(word)) {
            words.set(word, 1);
        } else {
            let value = words.get(word);
            words.set(word, value + 1);
        }
    }

    let result = [];

    for (let [word, occurrence] of words) {
        if (occurrence % 2 === 1) {
            result.push(word);
        }
    }

    console.log(result.join(" "));


}

oddOccurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurrence('Cake IS SWEET is Soft CAKE sweet Food');