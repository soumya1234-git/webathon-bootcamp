// Checks given number is a perfect square
function isPerfectSquare(num){
    if(num<0){
        return false;
        // Negative numbers cannot be perfect squares
    }
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
    // check if sqrt is an integer
    }
    console.log(isPerfectSquare(25));
    // true