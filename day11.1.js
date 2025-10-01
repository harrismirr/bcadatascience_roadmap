const student = {
    name: "Harris",
    age:18,
    adress:{
        street:"Hawal Road",
        city:"Srinagar",
        state:" jammu and kashmir" 
    },
    marks: {
     math: 95,
     science: 90
    }
};
console.log(student.name);
console.log(student.adress.city);
console.log(student.marks.math);

const company = {
    name: "Technova",
    location:{
      city: "srinagar",
      state: "jammu and kashmir"
    },
    employees:{
        total:120,
        departments:["HR","IT","Finance"]
    }
};
console.log(company.name);
console.log(company.location.city);
console.log(company.employees.total);
console.log(company.employees.departments[0]);

