// print the pattern
// 1
// 12
// 123
// 1234
// 12345
function printPattern(rows){
    for(let i = 1;i<=rows;i++){
        let pattern = "";
        for (let j=1;j<=i;j++){
            pattern += j +"";
        }
        console.log(pattern.trim());
    }
}
// call the function with five rows
printPattern(5);
