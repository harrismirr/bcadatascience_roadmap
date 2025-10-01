function calculateAverage(marks) {
    let total = 0;
    for(let m of marks) {
        total += m;
    }
    return total / marks.length;
}
const student = {
    name:"Harris",
    age:18,
    marks:[85,90,78,92]
};
console.log("Students:",student.name);
console.log("Average Marks:",
calculateAverage(student.marks));


function add(a, b) {
    return a + b;
}
const addArrow = (a, b) => {
    return a + b;
};
console.log("Normal:", add(5, 3));
console.log("Arrow:", addArrow(5, 3));


const square = (n) => n*n;
console.log("Square:",square(6));

