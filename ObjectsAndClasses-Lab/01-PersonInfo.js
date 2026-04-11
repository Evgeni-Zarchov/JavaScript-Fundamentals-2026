function info(firstName, lastName, age) {
    let personObj = {};

    personObj["firstName"] = firstName;
    personObj["lastName"] = lastName;
    personObj["age"] = Number(age);

    return personObj;
}
let person = console.log(info("Peter","Pan","20"));