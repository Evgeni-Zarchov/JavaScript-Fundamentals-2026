function asciiPrint(start, stop) {
    let startIndex = start.charCodeAt(0);
    let endIndex = stop.charCodeAt(0);
    let asciiStart = Math.min(startIndex, endIndex);
    let asciiEnd = Math.max(startIndex, endIndex);
    let result = "";

    for (let i = asciiStart + 1; i < asciiEnd; i++) {

        let elements = String.fromCharCode(i);

        result += `${elements} `;
    }

    console.log(result);
}

// asciiPrint("a", "d");
// asciiPrint('#', ':');
asciiPrint('C', '#');