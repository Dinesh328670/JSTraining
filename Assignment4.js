/*
4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.
*/

let student = {
    name: "Dinesh",
    age: 27,
    percentage: "80%",
    coursecmptestus: true,
    grade: "A"
}

console.log("Student Information:", student);

console.log("--------------Using Data Types and fill paragraph-------------");
console.log(`The student named ${student.name} is ${student.age} years old, 
    has scored ${student.percentage}, is enrolled in a course, has passed the test, 
    and has received an ${student["grade"]} grade.`);


