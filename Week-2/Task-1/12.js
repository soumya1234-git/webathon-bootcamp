// print the Multiplication table using while loop
function multiplicationTable(num){
    let i = 1;
    while(i<= 10){
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}
multiplicationTable(25);
// prints table of 5