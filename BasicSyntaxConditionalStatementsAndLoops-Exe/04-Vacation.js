function vacation(group, typeOfGroup, dayOfWeek) {
    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                price = group * 8.45;
            } else if (dayOfWeek === "Saturday") {
                price = group * 9.80;
            } else if (dayOfWeek === "Sunday") {
                price = group * 10.46;
            }

            if (typeOfGroup === "Students" && group >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            if (typeOfGroup === "Business" && group >= 100) { group -= 10 };

            if (dayOfWeek === "Friday") {
                price = group * 10.90;
            } else if (dayOfWeek === "Saturday") {
                price = group * 15.60;
            } else if (dayOfWeek === "Sunday") {
                price = group * 16;
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                price = group * 15;
            } else if (dayOfWeek === "Saturday") {
                price = group * 20;
            } else if (dayOfWeek === "Sunday") {
                price = group * 22.50;
            }
            if (typeOfGroup === "Regular" && group >= 10 && group <= 20) {
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday");
vacation(40,
    "Regular",
    "Saturday");