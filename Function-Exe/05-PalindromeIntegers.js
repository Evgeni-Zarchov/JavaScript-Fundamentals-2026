function palindrome(arr) {

    function isPalindrome(num) {

        let numAsString = String(num);

        let reversedArr = numAsString.split("").reverse().join("");

        return numAsString === reversedArr;
    }


    for (let nums of arr) {
        let result = isPalindrome(nums);
        console.log(result);
    }
}

palindrome([123, 323, 421, 121]);
palindrome([32, 2, 232, 1010]);