/*
Assignments On Operators
=============================
Guess the output?
---------------------
1.console.log(1 + "2" + 3);
2.console.log(1 + 2 + "3");
3.console.log("5" * true);
4.console.log(10 > 5 > 1);
5.let a = 2;
    let b = a++ + ++a;
    console.log(a, b);

6.let a = 3;
console.log(a++ + a++ + ++a);

7.console.log(5 * 2 == "10");

8.
let x = 1;
let y = ++x + x++ + x;
console.log(x, y);

9.console.log(10 > 5 && 20 < 30);

10.console.log(null || undefined || "Playwright");
*/
console.log("...................................");

console.log(1 + "2" + 3);//123
console.log(1 + 2 + "3");//33
console.log("5" * true);//5
//why because when we use + and , only for concatination , if we use + for this scenario the output is "5true", but we use "*" so automatically String 5 convert to number this is called implcit conversion

console.log(10 > 5 > 1);//true
console.log("**************************************");
let a = 2;//4
let b = a++ + ++a;
/*
a=2
b=a++ + ++a
a++ => value atlize one time decleared in b so automatically increased a value so value is 3
++a => already a value 3 we using preincrement so a current value is 4
a=4
b=2+4
b=6 */
console.log(a, b);//4,6

console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
/*6.let a = 3;
console.log(a++ + a++ + ++a);

*/
let c= 3;
console.log(c++ + c++ + ++c);// 13
/*
1st =>c++ value is : 3 because post increment atlize one time we decleared that time only increased the value 
now current c value is 4
2nd => C++ value is: 4  because post increment atlize one time we decleared that time only increased the value
now current c value is 5
3rd => ++c value is 6 because Preincrement first increse the value then we will use it 
c value aslo now 6
console.log(3+4+6)= 13
*/
console.log("**************************");

//7.console.log(5 * 2 == "10");
console.log(5 * 2 == "10");//true
//we use loose equality , loose equality condition is data type not considered, only value is same condition will be true 
// for ex 5* 2= 10 and another one String "10" => both data type is different but values are same so condition true
console.log("###############################");
let x = 1;
let y = ++x + x++ + x;
/*
x=1
y=++x + x++ + x
y value:
1st => ++x value is : 2 because Preincrement first increse the value then we will use it 
x value aslo now 2 
2nd => x++ value is : 2 because post increment atlize one time we decleared that time only increased the value 
now current x value is 3
3rd => x value is : 3
*/
console.log(x, y); // x value 3 , y value 7

console.log("********************************");
console.log(10 > 5 && 20 < 30);//true
console.log(null || undefined || "Playwright"); // playwright
// why because null and undefined are falsy value and "Playwright" is truthy value


