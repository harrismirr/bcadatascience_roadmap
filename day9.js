const numbers =[5,8,12,3,7]
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Numbers:" ,numbers);
console.log("Sum:",sum);
const reversed = [];
for(let i = numbers.length-1;i>=0; i--){
    reversed.push(numbers[i]);
}
console.log("Reversed:",reversed);

