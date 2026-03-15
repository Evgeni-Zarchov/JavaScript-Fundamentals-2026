function kNumbers(arr) {
    let elementK = arr.shift();

    let firstKelements = arr.slice(0, elementK);
    let lastKelements = arr.slice(-elementK);

    console.log(firstKelements.join(" "));
    console.log(lastKelements.join(" "));
}

kNumbers([2, 7, 8, 9]);
kNumbers([3, 6, 7, 8, 9]);