function loadingBar(num) {
    let result = "[";
    let loadingBarPercent = num / 10;
    let dotPercent = 10 - loadingBarPercent;

    result += "%".repeat(loadingBarPercent);
    result += ".".repeat(dotPercent);
    result += "]";

    if (num === 100) {
        console.log("100% Complete!")
        console.log(result);
    } else {
        console.log(`${num}% ${result}`);
        console.log("Still loading...");
    }

}

loadingBar(30);