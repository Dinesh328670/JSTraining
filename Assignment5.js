/*
5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?
*/

let userName;
let userEmail = null;
console.log("-----------------------------------");
console.log("First Value",userName)//undefined
console.log(typeof userName);
console.log("second Value",userEmail);//null
console.log(typeof userEmail);

/*
1. What is the difference between undefined and null?
null:
intensionaly represents no value , type of value is object

undifined:
Value has not been assigned , type is undefined

2. What does typeof userName return?
undefined
3. What does typeof userEmail return?
object
4. Why is typeof null considered unusual in JavaScript?
null type is object in js, because legecy issue in this null type


*/

