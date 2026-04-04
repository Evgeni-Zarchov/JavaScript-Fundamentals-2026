function sort(arr) {
    let result = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    console.log(result.join(" \n "));
}

sort(['alpha', 'beta', 'gamma']);