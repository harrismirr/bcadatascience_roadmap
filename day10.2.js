function addNumbers(a,b){
    return a+b;
}
let result = addNumbers(7,5);
console.log("sum is:",result);


const multiply = (a,b) => {
    return a*b;
}
let product = multiply(4,6);
console.log("Product is:",product)


function greetUser(name = "Guest") {
    console.log("Welcome, " + name + "!");
}
greetUser();
greetUser("Harris");