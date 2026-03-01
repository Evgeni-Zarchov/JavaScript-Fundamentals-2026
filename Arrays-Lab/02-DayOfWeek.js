function dayOfWeek(numberOfDayOfWeek) {
    // to do the task i have to create one array that contains the weeks(string).

    let weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    // based on number of week, but its tricky the first day start from number one but with array has to start with 0, but on the input one must show Monday so i had to calc, to do it one if else in range 1-7 to be valid days otherwise invalid day.

    // decrease - 1 because in an array monday is on 0.

    if (numberOfDayOfWeek >= 1 && numberOfDayOfWeek <= 7) {
        console.log(weekDays[numberOfDayOfWeek - 1]);
    } else {
        console.log("Invalid day!");
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);