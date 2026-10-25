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
let empName = ["Rahul", "Priya", "Amit"]
console.log(empName);//['Rahul', 'Priya', 'Amit ]
console.log(empName.length);
//add ==> push()
let addName = empName.push("Sneha")
console.log(addName);//return new length of array
console.log(empName);//new array displayed
//Remove the last emploee form the list ==> pop()

let removeName = empName.pop();//return delete array value(delete end of the array value)
console.log(removeName);//deleted value displayed
console.log(empName);// new array value displayed

//Add "manager" begining of the list

let addName1 = empName.unshift("Manager");
console.log(addName1);//return new length of array value displayed
console.log(empName);// new array value displayed

//Remove the first employee from the list 
let removeName1 = empName.shift()
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

let product = ["Mobile", "Laptop", "Mouse"];
console.log(product);//['Mobile','Laptop','Mouse']
console.log(product.length);//3
// Add "Keyboard" to the cart 
let product1 = product.push("Keyboard");//return new length of array value stored in this variable 
console.log(product1);//4
console.log(product);//new array value displayed ['Mobile','Laptop','Mouse','Keyboard']

//Display all products in reverse order
let reverseProduct = product.reverse()//revernce the array and return reference same of array
console.log(reverseProduct);//return reference same array(reversed Array) [ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]
console.log(product);//Reversed new array [ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

//Convert all cart items into a single string separated by " | "  

let product2 = product.join(" | ") // return string value (All array value convert string but not impact original array , if we use this string store another variable and use it.)
console.log(product2);//Keyboard | Mouse | Laptop | Mobile
console.log(product);//[ 'Keyboard', 'Mouse', 'Laptop', 'Mobile' ]

console.log("*******Program3*********");
/*
3. Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order  

*/
let browseTabs = ["Google", "YouTube", "ChatGPT"]
console.log(browseTabs);
//1. Close the last opened tab  
let closeTabs = browseTabs.pop();
console.log("close Last Tab: ", closeTabs);
console.log("Remaining Tab: ", browseTabs);
//2. Add "GitHub" as the first tab  
let firstTab = browseTabs.unshift("GitHub");
console.log("Newly added first Tab: ", firstTab);
console.log(`Total tab list:`, browseTabs);
//3. Display tabs in reverse order  
console.log("Reverse all tabs: ", browseTabs.reverse());
console.log("Current browsing tabs order list: " + browseTabs);

console.log("**********program4***********");


/*
4. Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string  
*/
let orders = ["Pizza", "Burger", "Pasta"]

//1. Add "Sandwich" to the orders  
console.log(orders.push("Sandwich"));
console.log("current orders:", orders);

//2. Remove the first order
console.log(orders.shift());
console.log("current orders:", orders);

//3. Display all orders as a comma-separated string  
console.log(orders.join(" , "));

console.log(orders);

console.log("**********program5***********");
/*
5. Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list 
*/

let stuAttence = ["Ankit", "Riya", "Karan"];
console.log(stuAttence.unshift("Neha"));
console.log(stuAttence);
//Remove the last student from the list
console.log(stuAttence.pop());
console.log(stuAttence);
//3. Create a separate copy of the attendance list

let stuattence1 = [...stuAttence];
console.log(stuattence1);

console.log("**********program6***********");
/*
 QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order  

*/
let testCase = ["LoginTest", "PaymentTest", "SearchTest"];
console.log(testCase);


//1. Create another copy of the same array  

let tstcase1 = [...testCase];
console.log(tstcase1);
//2. Extract only the first 2 test cases  
let tstCase2 = testCase.slice(-3, -1);
let tstCase3 = testCase.slice(0, 2);
console.log(tstCase2);
console.log(tstCase3);
//3. Display test cases in reverse order  
console.log(testCase.reverse());

console.log("*******Program7*********");
/*
 Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-"  
*/
let movies = ["Inception", "Avatar", "Titanic"]

//1. Add "Interstellar" to the movie list  

let addMovies = movies.push("Interstellar")
console.log(addMovies);

console.log(`New Movie lis ${movies}`);

//2. Replace "Titanic" with "Jawan"  

let replaceMovie = movies.splice(2, 1, "Jawan");
console.log(replaceMovie);
console.log(movies);

//3. Convert all movie names into a single string separated by "-"  
console.log(movies.join(" - "));

console.log("*******Program8*********");
/*
8. Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory  


*/
let prodInven = ["Mobile", "Laptop", "Tablet", "Camera"]
//1. Remove "Tablet" from inventory  
let removeprod = prodInven.splice(2, 1);
console.log(removeprod);
console.log(prodInven);

//2. Add "Smart Watch" after "Laptop"  
let addprod = prodInven.splice(2, 0, "SmartWatch")
console.log(addprod);
console.log(prodInven);

//3. Create a duplicate copy of updated inventory  

console.log(prodInven.push(...prodInven));
console.log("Duplicate Product:", prodInven);

console.log("*******Program9*********");
/*
9. Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses  

*/

let onlineCourse = ["JavaScript", "Playwright", "Cypress"];

//1. Remove the first course  
let removeCourse = onlineCourse.shift()
console.log(removeCourse);
console.log(onlineCourse);
//2. Add "TypeScript" at the beginning  
console.log(onlineCourse.unshift("TypeScript"));
console.log(onlineCourse);

//3. Extract only the last 2 courses  
let course1 = onlineCourse.slice(1);
console.log("Extract last two courses", course1);

console.log("*******Program10*********");
/*
10. Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string  

*/

let songs = ["Song1", "Song2", "Song3"];
//1. Display playlist in reverse order 
let revSongs = songs.reverse();
console.log(revSongs);
console.log(songs);
//2. Remove the last song  
console.log(songs.pop());
console.log(songs);
//3. Add "NewSong" at the beginning  
console.log(songs.unshift("NewSong"));
console.log(songs);
//4. Convert playlist into a single string  
let song1 = songs.join(" , ");
console.log(song1);
console.log(songs);

console.log("*******Program11*********");
/*
11. Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list  

*/
let bugTrack = ["Bug101", "Bug102", "Bug103"];

//1. Add "Bug104" 
console.log(bugTrack.push("Bug104"));
console.log(bugTrack);

//2. Remove "Bug102"  
console.log(bugTrack.splice(1,1));
console.log(bugTrack);

//3. Create a copy of the bug list  

let bugCopy=[...bugTrack]
console.log(bugCopy);

console.log("*******Program12*********");
/*
12. Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> " 

*/

let dailyTask=["Wake Up", "Exercise", "Study"]

//1. Add "Meeting" to the task list  
console.log(dailyTask.push("Meeting"));
console.log("Add Meeting into dailyTask: ",dailyTask);

//2. Remove the first task  
console.log(dailyTask.shift());
console.log("First Task Removed: ",dailyTask);

//3. Reverse all tasks  
console.log("Reverse all the task: ",dailyTask.reverse());
console.log("Current Task: ",dailyTask);

//4. Display all tasks in a single string separated by " -> " 

console.log("All task converted into single string : ",dailyTask.join(" -> "));
console.log("Original Task: ",dailyTask);

console.log("*******Program13*********");
/*
13. Mobile Contacts List 
Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts  

*/

let contactList=["Ram", "Shyam", "Mohan"];
console.log(contactList);

//1. Add "Sita" at the beginning  
console.log(contactList.unshift("sita"));
console.log("New contact list: ",contactList);
//2. Remove the last contact  
console.log(contactList.pop());
console.log("Last Contact removed: ",contactList);
//3. Extract only the first 2 contacts  

let newContact=contactList.slice(0,2);
console.log(newContact);

console.log("*******Program14*********");
/*
14. Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order  
*/

let team=["Virat", "Rohit", "Gill"];
console.log("Current Team: ",team);
//1. Add "Hardik" to the team  
console.log(team.push("Hardik"));
console.log("New Team: ",team);
//2. Replace "Gill" with "KL Rahul"  
console.log(team.splice(2,1,"KL Rahul"));
console.log("New Team: ",team);
//3. Display players in reverse order 
console.log("Players in Reverse order: ",team.reverse());

console.log("*******Program15*********");

/*
Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string

*/
let failTest=["LoginFail", "CheckoutFail", "SearchFail"];

//1. Add "ProfileFail"  
console.log(failTest.push("ProfileFail"));
console.log(failTest);
//2. Remove the first failed test  
console.log(failTest.shift());
console.log(failTest);
//3. Create another copy of the failed tests array  
let failTest1=[...failTest]
//4. Extract only the first 2 failed tests  
let failTest2=failTest.slice(0,2)
console.log(failTest2);
//5. Replace "CheckoutFail" with "PaymentFail" 
console.log(failTest.splice(0,1,"PaymentFail"));;
 console.log(failTest);
//6. Convert all failures into a single comma-separated string
let failTest3=failTest.join(" , ");
console.log(failTest3);


 













































































