const students = [
    {name:"Harris",marks :85},
    {name:"ayaan",marks :92},
    {name:"sana",marks :78},
    {name:"zoya",marks:88},
];
let total=0;
for(let i=0;i < students.length; i++) {
    total += students[i].marks;
}
const average = total / students.length;
let topper = students[0];
for(let i = 1;i< students.length;i++) {
    if(students[i].marks > topper.marks) {
        topper=students[i];
    }
}
console.log("Students:",students);
console.log("Average marks:",average)
console.log("Topper:",topper.name,"With",topper.marks,"marks");





 
