const multiply = (arr) => {
    let product = 1;
    for(let i = 0; i < arr.length;i++){
      product*=arr[i];
    }
    return product;
};
function calculate(numbers = [2,4,6,8]) {
   let sum = 0;
   for(let i = 0; i < numbers.length;i++){
    sum += numbers[i];
   }
const product = multiply(numbers);
return{sum: sum, product: product};
}
console.log("Default array:",calculate());
console.log("Customer array:",calculate([3
,5,7]));

