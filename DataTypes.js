let num1 = 10;//number
let name1= "dinesh"//string
let singlequo='welcome' //single quotes
let templatestrng=`Hi! i'm ${name1} , from chennai & completed B.Tech(IT), currently i worked on wipro with 5 year in manual Testing`
let booln=true//boolean
let undef //undefined
let nul=null //null
let bignum=123n // big int (using end off number with complete with 'n')

console.log("----------------------------------")
console.log("number is:"+num1);
console.log(typeof num1);
console.log("----------------------------------")
console.log("String with single quotes:",singlequo); // we have two types value printed in console (+ or ,)
console.log(typeof singlequo);
console.log("----------------------------------")
console.log("string with double quotes:",name1);
console.log(typeof name1);
console.log("----------------------------------")
console.log("Template String:",templatestrng);
console.log(typeof templatestrng);
console.log("----------------------------------")
console.log("Boolean is:"+booln);
console.log(typeof booln);
console.log("----------------------------------")
console.log("Undefined Is "+undef)
console.log(typeof undef);
console.log("----------------------------------")
console.log("Big Integer Number",bignum);//if we went print bigint number (end of the num with 'n')
console.log(typeof bignum);
console.log("Max length number",Number.MAX_VALUE);//JS max value number
console.log("Max length fully number ",Number.MAX_SAFE_INTEGER);
console.log("----------------------------------")
/* null means unkown value / intentionally we can wrote some data as null

what is typeof null?
-> null is always object
-> legacy bug is js language 
*/
console.log("Null value is:",nul);
console.log(typeof nul);

console.log(".............................................................");


//object
/*Two types we declared variable 
1.Dot notation 
2.bracket notation
*/
let obj= {
    id:100,
    name:"Dinesh"
}

//dot notation
console.log(obj.id);
//bracket notation
console.log(obj["name"])
console.log(obj[`id`])















