//Assignments On function 
console.log("************Program1*****************");
/*
1. Calculate Test Score 
Create a function calculateScore() that accepts three marks 
and returns the total score. 
Requirements: 
• Accept three numbers as parameters.  
• Calculate the total.  
• Return the result.  
• Call the function and print the result. 

*/
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} num3 
 */
function calculateScore(num1,num2,num3){

let result=num1+num2+num3;
return result;
}
console.log(calculateScore(60,80,50));

console.log("************Program2*****************");
/*
2. Check Test Status 
Create a function checkTestStatus() that accepts a test score. 
Rules: 
• Score >= 40 → "PASS"  
• Score < 40 → "FAIL" 

*/
/***
 * 
 * @param {number} score
 */
let checkTestStatus=function(score="Enter valid Number"){
    if(score>=40){
        console.log(`Above ${score} - Pass`);
        
    }
    else if(score<40){
        console.log(`Below ${score} - Fail`);
        
    }
    else
    {
        console.log("Invalid",score);
        
    }

}
checkTestStatus(45);
