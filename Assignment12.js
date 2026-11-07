/*
==============================================================
Assignments on Object
============================
*/
console.log("************program1************");

/*
Program 1. Student Object 
Create a student object with the following properties: 
• id  
• name  
• age  
• course  
• marks  
Perform the following: 
1. Print the complete object.  
2. Print the student's name.  
3. Print the student's marks.  
4. Change the student's course.  
5. Update the student's marks.  
6. Add a new property city.  
7. Delete the age property.  

*/

let student = {
    "id": 101,
    "name": "Dinesh",
    "age": 26,
    "course": "Engineer",
    "marks": 90

}

//1. Print the complete object.  
console.log(student);
//2. Print the student's name.  
console.log(student.name);
//3. Print the student's marks.  
console.log(student.marks);
//4. Change the student's course.  
student.course = "BTech"
console.log(student.course);
//5. Update the student's marks.  
student.marks = 80
//6. Add a new property city.  
student.city = "Chennai";
//7. Delete the age property.  

delete student.age;
console.log(student);

console.log("************program2************");
/*
Program 2. Employee Object 
Create an employee object containing: 
id 
name 
department 
designation 
salary 
Perform: 
1. Access each property using dot notation.  
2. Access each property using bracket notation.  
3. Update the salary.  
4. Add a location property.  
5. Delete the designation property. 

*/
let empDetalils = {
    id: 101,
    name: "Dinesh",
    designation: "Automation",
    Salary: 50000
}
//1. Access each property using dot notation.
console.log(empDetalils.id);
console.log(empDetalils.name);
console.log(empDetalils.designation);
console.log(empDetalils.Salary);
//2. Access each property using bracket notation.  
console.log(empDetalils['id']);
console.log(empDetalils['name']);
console.log(empDetalils[`designation`]);
console.log(empDetalils["Salary"]);
//3. Update the salary.  
empDetalils.Salary = 90000;
console.log(empDetalils.Salary);
//5. Delete the designation property. 
delete empDetalils.designation;
console.log(empDetalils);

console.log("************program3************");
/*
program 3.Create a testData object containing: 
username 
password 
browser 
environment 
timeout 
Use Object.keys() to: 
1. Get all property names.  
2. Count the number of properties.  
3. Check whether username exists. 

*/
let testData =
{
    username: "Dinesh@123",
    password: 12345,
    browser: "chromium",
    environment: "Testing",
    timeout: 2000
}

//Use Object.keys() to: 
//1. Get all property names.  
let tstdata = Object.keys(testData);
console.log(tstdata);
//2. Count the number of properties.  
console.log(Object.keys(testData).length);
console.log(tstdata.length);
//3. Check whether username exists. 
console.log(Object.keys(testData).includes("username"));
console.log(tstdata.includes("username"));


console.log("************program4************");
/*
Program 4.Create an object containing test configuration: 
browser: "chromium" 
headless: true 
timeout: 30000 
retries: 2 
Use Object.values() to: 
1. Display all values.  
2. Check whether "chromium" exists.  
3. Count the number of configuration values. 
*/
let browserData = {
    broweser: "chromium",
    headless: true,
    timeout: 30000,
    retries: 2
}
//Use Object.values() to: 
//1. Display all values.  
let browserdata1 = Object.values(browserData);
console.log(browserdata1);
console.log(Object.values(browserData));
//2. Check whether "chromium" exists.
console.log(browserdata1.includes("chromium"));
console.log(Object.values(browserData).includes("chromium"));
//3. Count the number of configuration values. 
console.log(browserdata1.length);
console.log(Object.values(browserData).length);


console.log("************program5************");

/*
Program 5.Create a user object: 
username 
role 
department 
experience 
Use Object.entries() to print: 
username : standard_user 
role : tester 
department : QA 
experience : 5 

*/
let empdet = {
    username: "standard_user",
    role: "tester",
    department: "QA",
    experience: 5
}

let empdet1 = Object.entries(empdet);
console.log(empdet1);

console.log(Object.entries(empdet));


console.log("**********Program6*************");
/*

Program 6.Create: 
const user = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 
Create a new object that: 
• Contains all properties of user.  
• Changes role to "Automation Engineer".  
• Adds experience: 5.  
The original object should remain unchanged. 
*/

const user1 = {
    name: "John",
    role: "Tester",
    city: "Pune"
};

//• Contains all properties of user. 
const user2 = { ...user1 }
console.log(user1);
console.log(user2);


//• Changes role to "Automation Engineer".  
user2.role = "Automation Engineer"
//• Adds experience: 5.  
user2.experience = 5;

//The original object should remain unchanged. 
console.log(user1);
console.log(user2);

console.log("**********Program7*************");
/*
Program 7.Playwright Configuration Object 
Create a configuration object: 
browser 
baseURL 
headless 
timeout 
retries 
Example: 
{ 
} 
browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
Perform: 
1. Print all configuration values.  
2. Change the browser.  
3. Change the timeout.  
4. Add screenshot: "only-on-failure".  
5. Check whether retries exists.  
6. Create a copy with a different baseURL.  

*/
const baseApp = {
    browser: "chromium",
    baseURL: "https://example.com",
    headless: true,
    timeout: 30000,
    retries: 2
}

//1. Print all configuration values. 
console.log(Object.values(baseApp));
//change the browser
baseApp.browser="firefox"
//change the timouts
baseApp.timeout=50000;
//check whether retries exixts
let result=Object.hasOwn(baseApp,"retries");
console.log(result);
//create copy with different baseURL
let baseApp2={...baseApp}
console.log(baseApp);
console.log(baseApp2);











































