const students = [
    {name:"Harris", marks:85 },
    {name:"ali", marks:72},
    {name:"Sara", marks:95},
    {name:"Zara", marks:60}
];
const topper = students.reduce((acc,
s) => {
    return acc + s.marks;
},0);





const names = students.map(s => s.name);
console.log("Names:", names);


const totalmarks = students.reduce((acc,
    s) => {
        return acc + s.marks;
    },0);
    const avgMarks = totalMarks /
    students.length;
    console.log("Average Marks:", avgMarks);
    



