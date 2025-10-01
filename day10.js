function greet(name){
 console.log("Hello," + name + 
    "! Welcome back.");
}
greet("Harris");

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result*= i;
    }
    return result;
}
console.log("Factorial of 5:",factorial(5));


const square = (x) => x*x;
console.log("Square of 6:",square(6));


function addNumbers(a,b) {
    return a+b;
}
let result = addNumbers(7,5);
console.log("sum is:", result);
