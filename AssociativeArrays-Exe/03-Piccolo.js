function piccolo(arr) {
    let parkingLot = new Set();


    for (let info of arr) {
        let [direction, numberPlate] = info.split(", ");

        if (direction === "IN") {
            parkingLot.add(numberPlate);
        } else if (direction === "OUT") {
            parkingLot.delete(numberPlate);
        }
    }

    let entries = Array.from(parkingLot);


    let sortedParking = entries.sort((a, b) => a.localeCompare(b));

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {

        for (let cars of sortedParking) {
            console.log(cars);

        }
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']);