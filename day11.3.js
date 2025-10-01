function add(a, b) {
    return a+b;
}
let sum = add(5, 7);
console.log("sum is:",sum);

function multiply(x ,y){
    return x*y;
}
console.log("Result:",multiply(4, 6));

function square(num) {
    return num*num;
}
let result = square(5);
console.log("Square is:",result);


function checkEvenodd(num) {
    if(num % 2 === 0){
        return "Even";
 } else {
    return "Odd";
 }
}
console.log("7 is:", checkEvenodd(7));
console.log("10 is:", checkEvenodd(10));
