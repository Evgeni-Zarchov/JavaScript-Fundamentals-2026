function softUniReceptions(arr) {
    let firstEmployee = Number(arr.shift());
    let secondEmployee = Number(arr.shift());
    let thirdEmployee = Number(arr.shift());

    let answeredQuestion = firstEmployee + secondEmployee + thirdEmployee;

    let studentCount = Number(arr.shift());

    let hours = 1;
    while (studentCount > 0) {


        if (hours % 4 === 0) {
            hours++;

        } else {
            studentCount -= answeredQuestion;
            hours++;
        }
    }

    console.log(`Time needed: ${hours - 1}h.`);


}

// softUniReceptions(['5', '6', '4', '20']);

softUniReceptions(['1', '2', '3', '45']);