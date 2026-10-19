console.log("********program1**********");
/*
Conditional Satements Program
=================================
Assignment1: 
Problem: 
Write a JavaScript program to check whether a number is even or odd. 
*/
let num=24;
if(num%2===0)
{
    console.log(`${num} is Even number`);
    
}
else{
        console.log(`${num} is Add number`);
    
}

console.log("********program2**********");
/*
Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case? 
*/

//i'm using switch case 

let days=3;

switch(days)
{
    case 1:
        console.log(`${days} is Monday`);
        break;
    case 2:
        console.log(`${days} is Tuesday`);
        break;
    case 3:
        console.log(`${days} is Wednesday`);
        break;
    case 4:
        console.log(`${days} is Thursday`);
        break;
    case 5:
        console.log(`${days} is Friday`);
        break;
    case 6:
        console.log(`${days} is Saturday`);
        break;
    case 7:
        console.log(`${days} is Sunday`);
        break;
    default:
        console.log("Not a Week based number");        
}

console.log("********program3**********");
/*
Problem: Write .js script that evaluates a test case result based on HTTP 
response status code the program should use Nester if..else statements to 
determine result message.  
Instructions:  
1.create a new file named testResult.js Inside the file declare variable to store 
status code Let responseCode=200;  
2.use if else Nested statements to evaluate response code and print status 
message  
3.Use the following logic for result evaluation: I 
f response Code is 100-199→print: Informational  
If response Code is 200-299→print: successful  
If response Code is 300-399→print: Redirectional  
If response Code is 400-499 →print: Client Error 
If response Code is 500-599→print: Server Error For any other code →print 
Unkown Status code  
4.Run script using node testResult.js  

*/

//nested if

let statusCode=400;
if((statusCode>=100)&&(statusCode<600))
{
if((statusCode>=100)&&(statusCode<200))
{
    console.log(`${statusCode} is Informational`);
    
}
else if((statusCode>=200)&&(statusCode<300))
{
    console.log(`${statusCode} is successful`);
    
}
if((statusCode>=300)&&(statusCode<400))
{
    console.log(`${statusCode} is Redirectional`);
    
}
if((statusCode>=400)&&(statusCode<500))
{
    console.log(`${statusCode} is Client Error`);
    
}
if((statusCode>=500)&&(statusCode<600))
{
    console.log(`${statusCode} is Server Error`);
    
}
}
else
{
    console.log("Unkown Status Code");
    
}


console.log("********program4**********");
/*
Assignment 4
Problem:  Write a script that suggests what clothing to wear based on the 
current temperature The program should use if...else or if...else if statements to 
determine the suggestion.  
Instructions: 1. Create a new file named weather.js. Inside the file, declare a 
variable to store the temperature,  
for example: let temperature = 28;  
2. Use if...else or if...else if statements to decide and print the clothing 
suggestion based on the temperature 
3. Use the following logic for clothing suggestion:  
If temperature is above 35°C Print: wear light cotton clothes  
◦ If temperature is between 20°C and 35°C Pint: Normal casual wear  
○ If temperature is between 10°C and 19°C Print: Wear a jacket  
○ If temperature is below 10°C Print: stay indoors, it's too cold! Run the script 
using: node weather.js  
Test Cases to Try: • temperature = 40 • temperature = 28 . temperature- 15  

*/

let temperature=30;

if(temperature>35)
{
    console.log(`${temperature}-wear light cotton clothes`);
    
}
else if((temperature>=20)&&(temperature<=35))
{
    console.log(`${temperature}-Normal casual wear`);
    
}
else if((temperature>=10)&&(temperature<=19))
{
        console.log(`${temperature}-Wear a jacket`);
}
else if(temperature<10){
    console.log(`${temperature}-stay indoors, it's too cold!`);
}
else{
    console.log("Enter valid temp");
    
}



console.log("********program4**********");


/*
Assignment5:  
Problem: Create a Javascript that checks whether the given username and 
password match the predefined login credentials using simple variables 
Instructions:  
1. Greate a new file named login.js.  
2. Inside the file, do the following: Declare two variables for user input: let 
enteredUsername = "Priyanka"; // Keep changing  
let enteredPassword = "Nigade":;//Keep changing (Change "some _ value" to 
simulate different test cases.)  
Declare two predefined credentials:  
const correctusername = "admin@emalil.com",  
const correctPassword = "admin@123";  
3. Use an if...else statement to compare: If both enteredusername and 
enteredPassword match the correct credentials, print: Login Successful 
Otherwise, print: Invalid credentials Run the script using: node login.js

*/
const correctusername = "admin@emalil.com";
const correctPassword = "admin@123"; 
let enteredUsername = "Priyanka";   
let enteredPassword = "Nigade"; 

if((correctPassword===enteredUsername)&&(correctPassword===enteredPassword))
{
    console.log("Login Successfully");
    
}
else{
    console.log("Invalid Credentials");
    
}

