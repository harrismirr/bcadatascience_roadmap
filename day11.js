const student = {
    name: "Harris",
    age: 19,
    course: "javascript Roadmap",
    greet: function () {
        console.log("Hello, my name is" + 
    this.course + ".");
     },
    updateAge:function (newAge){
        this.age = newAge;
        console.log("Age updated to" +
            this.age);
    }
};
console.log("Student Name:",
student.name);
console.log("student Age:",
student.age);
student.greet();
student.updateAge(20);
student.grade = "A";
console.log("Update Student Object:", 
student);

