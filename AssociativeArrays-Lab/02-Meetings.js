function meetings(arr) {
    let meetingRegister = {};

    for (let info of arr) {
        let [days, person] = info.split(" ");

        if (meetingRegister.hasOwnProperty(days)) {

            console.log(`Conflict on ${days}!`);
            continue;

        } else {

            meetingRegister[days] = person;
            console.log(`Scheduled for ${days}`);
        }

    }

    for (let meetingInfo in meetingRegister) {
        let value = meetingRegister[meetingInfo];

        console.log(`${meetingInfo} -> ${value}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);