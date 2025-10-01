const students = {
    name:"Harris",
    age: 18,
    course:"Javascript Roadmap"
};
console.log("---using for...in loop---");
for(let key in students){
    console.log(key + ": " + students[key]);
}
console.log("\n---using object.keys()---");
Object.keys(students).forEach(key => {
    console.log(key+ ": " + students[key]);
});




const student = {
    name:"Harris",
    age: 18,
    subjects:["Maths","science","compurter science","data science"]
};
console.log("--- student info ---");
for(let key in student) {
    console.log(key + ": " + student[key]);
}
console.log("\n--- subjects ---");
student.subjects.forEach(sub => {
    console.log(sub);
});



function printStudent(student) {
    console.log('name: ${student.name}');
    console.log('age: ${student.age}');
    console.log("subjects:");
    students.subjects.forEach(sub => 
   console.log("- " + sub));
    }
   const student1 = {
    name:"Harris",
    age:18,
    subjects:["maths", "science", "data science"]
    };
    printStudent(student1);
