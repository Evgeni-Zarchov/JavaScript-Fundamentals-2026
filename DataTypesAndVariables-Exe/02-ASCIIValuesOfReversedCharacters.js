function sortAscii(firstChar, secondChar, thirdChar) {
    console.log(`${thirdChar}${secondChar}${firstChar}`);

    console.log(`${thirdChar.charCodeAt(0)} ${secondChar.charCodeAt(0)} ${firstChar.charCodeAt(0)}`);
}

sortAscii(
    'a',
    'b',
    'c');
sortAscii(
    '%',
    '2',
    'o');
sortAscii(
    '1',
    '5',
    'p');