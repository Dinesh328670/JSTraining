//Looping concepts

/*
1.Prime Number
Problem Statement:
Write a JavaScript program to check whether a given number is prime or not using a loop.

*/

for(let i=1;i<=30;i++){
    let count=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count===2){
        console.log(`${i}-is prime number`);
        
    }
    else{
        console.log(`${i}-is not prime number`);
        
    }
        
}

console.log("********************program 2*********************************");
/*
2.Print Even Numbers
Problem Statement:
Write a JavaScript program to print all even numbers between 1 and 50 using a loop.
*/

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(`${i}-is Even number`);
        
    }
    else
    {
                console.log(`${i}-is Odd number`);
    }
}


console.log("********************program 3*********************************");
/*
Write a JavaScript program that accepts a number and prints its multiplication table
 from 1 to 10.

*/
let random=9;
for(let i=1;i<=10;i++)
{
    let result=random*i;
    console.log(`${i} X ${random} = ${result}`);
    
}


console.log("********************program 4*********************************");
/*
Factorial Number
Problem Statement:
Write a JavaScript program to calculate the factorial of a given positive integer using a loop.

i will take 10 factorial

*/
let num=1;

for(let i=1;i<=10;i++)
{
    num*=i;
    console.log(num);
    
}

console.log(`Total value of factorial 10!: ${num}`);

console.log("********************program 5*********************************");

/*
Count Digits
Problem Statement:
Write a JavaScript program to count the total number of digits present in a given number using a loop.

*/
let dig=1234567; let res=0;
while(dig>0){
dig=Math.floor(dig/10);
console.log(dig)
res++
}
console.log(`Total value of 1234567: ${res}`)


console.log("********************program 6*********************************");

/*
6.Stop the Loop at a Specific Number
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.

*/

for (let i=1;i<=20;i++)
{
    if(i===10)
    {
        break;
    }
    console.log("Number :",i);
    
}

console.log("********************program 7*********************************");
/*
7.Skip Even Numbers
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

*/

for(let i=1;i<=20;i++){
    if(i%2==0){
        continue;
    }
    console.log("Remaining number or Odd number",i);
    
    
}

console.log("********************program 8*********************************");
/*
8.Print a 5 × 5 Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
*****
*****
*****
*****
*****

*/
for(let i=1;i<=5;i++){
    let count=" ";
    for(let j=1;j<=5;j++)
    {
        count+="   *"
    }
    console.log(count);
    

}

console.log("********************program 9*********************************");
/*
9.Decreasing Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print the following pattern:

*****
****
***
**
*
*/
for(let i=1;i<=5;i++){
    let tot=" "
    for(let j=1;j<=i;j++)
    {
        tot+="  *"
    }
    console.log(tot);
    
}
