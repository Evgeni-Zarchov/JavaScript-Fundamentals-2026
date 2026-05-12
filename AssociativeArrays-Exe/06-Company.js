function company(arr) {
    let companyEmployees = {};

    for (let info of arr) {
        let [company, employee] = info.split(" -> ");

        if (companyEmployees.hasOwnProperty(company)) {
            if (!companyEmployees[company].includes(employee)) {
                companyEmployees[company].push(employee);
            }
        } else {
            companyEmployees[company] = [employee];
        }

    }

    let entries = Object.entries(companyEmployees);

    let sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sortedEntries) {
        console.log(company);

        for (let employee of employees) {
            console.log(`-- ${employee}`);
        }

    }

}

// company([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);

company([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);