console.log("*********Array scenario based questions************");
console.log("********program1*************");
/*
1. Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list 

*/
let empName =["Rahul", "Priya", "Amit"]
console.log(empName);//['Rahul', 'Priya', 'Amit ]
console.log(empName.length);
//add ==> push()
let addName=empName.push("Sneha")
console.log(addName);//return new length of array
console.log(empName);//new array displayed
//Remove the last emploee form the list ==> pop()

let removeName=empName.pop();//return delete array value(delete end of the array value)
console.log(removeName);//deleted value displayed
console.log(empName);// new array value displayed

//Add "manager" begining of the list

let addName1=empName.unshift("Manager");
console.log(addName1);//return new length of array value displayed
console.log(empName);// new array value displayed

//Remove the first employee from the list 
let removeName1=empName.shift()
console.log(removeName1);//return deleted value displayed'
console.log(empName);//new array value displayed

console.log("********program2*************");

/*
2. Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | "  

*/

let product=["Mobile", "Laptop", "Mouse"];
console.log(product);//['Mobile','Laptop','Mouse']
console.log(product.length);//3
// Add "Keyboard" to the cart 
let product1=product.push("Keyboard");//return new length of array value stored in this variable 
console.log(product1);//4
console.log(product);//new array value displayed ['Mobile','Laptop','Mouse','Keyboard']

//Display all products in reverse order
let reverseProduct=product.reverse()//revernce the array and return reference same of array
console.log(reverseProduct);//return reference same array(reversed Array) [ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]
console.log(product);//Reversed new array [ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

//Convert all cart items into a single string separated by " | "  

let product2=product.join(" | ") // return string value (All array value convert string but not impact original array , if we use this string store another variable and use it.)
console.log(product2);//Keyboard | Mouse | Laptop | Mobile
console.log(product);//[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]
















