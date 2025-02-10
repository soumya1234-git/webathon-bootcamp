function isPalindrome(num) {
    // negative numbers are not palindrome
    if(num<0)
        return false;
    let originalNum = num;
    let reversedNum = 0;
    while(num > 0){
        let digit = num % 10;
        // Extract the last digit
        reversedNum =  reversedNum * 10 + digit;
    //   build the reversed number
        num = Math.floor(num/10);  
        // remove the last digit

    }
    // compare the original number with the reversed number
    return originalNum === reversedNum
        }
        console.log(isPalindrome(121));
        // true

