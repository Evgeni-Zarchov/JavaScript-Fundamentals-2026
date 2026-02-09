function login(arr) {
    let username = arr[0];
    let password = "";
    let attempts = 1;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    for (let i = 1; i < arr.length; i++) {

        if (password === arr[i]) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (attempts < 4) {
                attempts++;
                console.log("Incorrect password. Try again.");

            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);