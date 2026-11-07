//String Assignments
console.log(`*************program1***************`);

/*
String Assignments
=======================
Assignment1: 
Problem: 
Count the number of words in a sentence. 
Input: “I am learning javascript” 
Output: 4 

*/
let totalWords = "I am learning javascript";
let countWords = totalWords.split(" ");

console.log('Total words count :', countWords.length);
console.log(countWords);

console.log(`*************program2***************`);

/*
Assignment2: 
Problem: 
Remove duplicate characters from a string. 
Input: “Programming” 
Output:Progamin 
*/
let duplicateWord = 'Programmings'
let count = duplicateWord[0]


for (let i = 1; i < duplicateWord.length; i++) {
    if (!count.includes(duplicateWord[i])) {

        count += duplicateWord[i]
    }
}
console.log("Remove Duplicate Word : ", count);


console.log(`*************program3***************`);
/*
Assignment3: 
Problem: 
Capitalize the first letter of a string. 
Input: “javascript” 
Output: “Javascript” 

*/
//1st method

let fword = 'javascript';
let f2word;
let f3word = fword.split("")
f2word = f3word[0].toUpperCase();
f3word.shift();
console.log(f2word + f3word.join(""));

//2nd method
let sword = "javascript";
console.log(sword.charAt(0).toUpperCase() + sword.slice(1));

console.log(`*************program4***************`);


/*
Assignment4: 
Problem: 
Remove all spaces from a string. 
Input: “Welcome to learn playwright” 
Output:”Welcometolearnplaywright” 
*/

let w1 = "Welcome to learn playwright";
let result = w1.split(" ").join("");
console.log(result);


//2nd method

let result1 = w1.replaceAll(" ", "")
console.log(result1);


console.log(`*************program5***************`);
/*
Assignment5: 
Problem: 
Find the number of characters in a string with and without using length. 

*/

let w2 = "Welcome to javascript"
let count2 = 0;
for (let i of w2) {
    count2++;
}
console.log(count2);



console.log(`*************program6***************`);

/*
Assignment6: 
Problem: 
Count the number of vowels in a string. 
Input:”Javascript” 
Output: 3

*/
let w3="Javascript".toLowerCase();
console.log(w3);

count3=0;
for(let i of w3)
{
    if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
    {
     count3++;
    }
}
console.log(count3);

//2nd method
let count4=0;
let vowles="aeiou"

for(let i of w3){
    if(vowles.includes(i)){
        count4++;
        
    }
}

console.log(count4);


console.log(`*************program7***************`);
/*
Assignment7: 
Problem: 
Reverse a string with & without using the built-in reverse() method.
Hint: Through array you can apply reverse()

*/
//with using reverse method

let w4="javascipt";
let result3=w4.split("").reverse().join("")
console.log(result3)

//without using reverse method
let revse="";
for(let i=w4.length-1;i>=0;i--)

{
    revse+=w4[i]
}
console.log(revse);





















