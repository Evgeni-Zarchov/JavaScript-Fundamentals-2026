function maxSequence(arr) {
    let longestSeq = [];
    let firstEl = arr[0];
    let currentSeq = [firstEl];

    for (let i = 1; i < arr.length; i++) {
        let currEl = arr[i];

        if (currEl === currentSeq[0]) {
            
            currentSeq.push(currEl);

            if (currentSeq.length > longestSeq.length) {
                longestSeq = currentSeq;
            }

        } else {

            currentSeq = [currEl];

        }
    }
    console.log(longestSeq.join(" "));

}
// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);