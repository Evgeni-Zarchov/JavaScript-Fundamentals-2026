function password(pass) {
    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkLettersAndDigits(pass) {
        let pattern = /^[A-Za-z0-9]+$/;

        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkDigits(pass) {
        let pattern = /[0-9]{2,}/;

        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    let isValidLength = checkLength(pass);
    let isValidLettersAndDigits = checkLettersAndDigits(pass);
    let isValidDigits = checkDigits(pass);

    if (isValidLength && isValidLettersAndDigits && isValidDigits) {
        console.log("Password is valid");
    }


}

password("MyPass123");
password("logIn");
password("pa$s$s");