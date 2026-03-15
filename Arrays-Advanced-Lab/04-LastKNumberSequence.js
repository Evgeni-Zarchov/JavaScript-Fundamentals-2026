function kSequence(nElements, kElements) {
    let kSequenceArray = [1];

    while (kSequenceArray.length < nElements) {
        let sum = 0;
        let kNums = kSequenceArray.slice(-kElements);

        for (let num of kNums) {
            sum += num;
        }

        kSequenceArray.push(sum);
    }

    console.log(kSequenceArray.join(" "));
}

kSequence(6, 3);
kSequence(8, 2);