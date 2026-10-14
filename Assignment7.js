/*
JavaScript Practice: Type Coercion & Explicit Conversion
===========================================================

Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.

Expected Output:
1500
*/
console.log("********Problem1************");
let price="500";
let quantity="3";
//Calculate Total price and expect result 1500, 
//but both value in string so we using Type conversion =>Number conversion
let total=price*quantity
console.log("Total price is",total);

//why because both value in string type but we using * operator and js default convert String("5") into number type 
//this auto type convertion not using for "+" operator

console.log("********Problem2************");
/*
Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.

Expected Output:
1200
*/
let price1 = "1000";
let tax = "200";
/*
This time we using "+" operator so auto type/number conversion not possible ,
so we first convert string to number using explicit conversion
*/
let finalprice=Number(price1);
let finaltax=Number(tax)
let total1=finalprice+finaltax

console.log(total1);
console.log(typeof finalprice ,"",typeof finaltax);

console.log("********Problem3************");
/*
Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected);
*/
let actual = "100";
let expected = 20;
console.log(actual + expected);//10020
//why because we using "+" opertor/concatination and value taken form left to right total value convert string

console.log("********Problem4************");
/*
Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);
*/
let actual1 = "100";
let expected1 = 20;
//What will be the output of:
console.log(actual1 - expected1);//80
/*
why because we using "-", both value number so not considered for data types
so values "100"-20= 80
*/
console.log("********Problem5************");
/*
Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);
*/
let actualPrice = "100";
let expectedPrice = 100;
//Check the result of:
console.log(actualPrice == expectedPrice);//true because we use loose equality ,so value only same not considered for Data Type
console.log(actualPrice === expectedPrice);//false because we use Strict equality , so Data type and Value must be same that time only will pass

console.log("********Problem6************");
/*
Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

Modify the code so that the assertion gives:
true
*/
let actualPrice1 = "500";
let expectedPrice1 = 500;
let finalPrice=Number(actualPrice1);

console.log(finalPrice === expectedPrice1);//true

console.log("********Problem7************");
/*
Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

*/
let timeout = "30000";
let finalTimeout=Number(timeout);
console.log(finalTimeout);//30000
console.log(typeof finalTimeout);//number

console.log("********Problem8************");
/*
Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345

*/
let orderId = 12345;
let ORDER=String(orderId);
console.log(ORDER);
console.log(typeof ORDER);








for(let i=1;i<=20;i++)
{
if(i%2===1){
    console.log(i);
    
}
}
 
let ab="hello"
//let i=0;
let result;
console.log(i.length);
for(let i=0;i<=ab.length;i++)
{
    result=ab[i];
}

