//Assignments On Class

console.log("**********Program1************");
/*
JavaScript Class Problem Statements 
Program 1: Create a Student Class 
Problem Statement: 
Create a Student class with properties name, age, and course. Create 
two objects and display their details. 
*/

class Student {
    //Create a Student class with properties name, age, and course. Create 
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    getData() {
        console.log("Student Name :" + this.name + "\nStudent age :" + this.age + "\nStudent Course :" + this.course);
    }
}
let s1 = new Student("Dinesh", 27, "IT");
const s2 = new Student("Akila", 26, "ECE");
s1.getData();
s2.getData()

console.log("********Program 2************");
/*
Program 2: Bank Account Class 
Problem Statement: 
Create a BankAccount class with the following: 
• accountHolder  
• balance  
• deposit()  
• withdraw()  
• checkBalance() 

*/

class BankAccount{
    accountHolder;
    balance;
    static deposit=1000;
    static withdrow=2000;
    
    constructor(accountHolder,balance){
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    depositAmount(){
        let addAmount=BankAccount.deposit + this.balance;
        console.log(addAmount);

        
    }
    withdrowAmount(){
        let lessAmount=BankAccount.withdrow + this.balance;
        console.log(lessAmount);
        

    }
    totalBalance(){
        let TotalBalance=this.balance + BankAccount.deposit - BankAccount.withdrow
        console.log(TotalBalance);
        //return TotalBalance;
        
    }

}
const Bankbalnce1=new BankAccount("Dinesh",20000);
Bankbalnce1.depositAmount();
Bankbalnce1.withdrowAmount();
Bankbalnce1.totalBalance();
if(Bankbalnce1.totalBalance()>1000){

    console.log("Bank Account is safe");
    Bankbalnce1.totalBalance()
    
}
else if(Bankbalnce1.totalBalance()<=0){
    console.log("Your amount is negative");
    Bankbalnce1.totalBalance();

}
else if((Bankbalnce1.totalBalance()>0)&&(Bankbalnce1.totalBalance()<1000))
{
     console.log("Minium balance");
     Bankbalnce1.totalBalance();
     
}
else{
    console.log("Please Enter valid Amount");
    
}

console.log("**********Program3************");
/*

Program 3: Employee Class 
Problem Statement: 
Create an Employee class with name, salary, and 
department. Create a method that calculates a 10% bonus and 
displays the total salary. 
*/

class Employee{
    name;
    salary;
    department;
constructor(name,salary,department)
{
    this.name=name;
    this.salary=salary;
    this.department=department;

}
SalaryHike(){
    let Hike=10*this.salary/100
    let TotalSalary=Hike+this.salary;
    console.log(`Employee Name : ${this.name}\n Employee department : ${this.department}\n Employee Salary: ${TotalSalary}`);
    
}
}
let e1=new Employee("Dinesh",500000,"Testing");
e1.SalaryHike();
let e2= new Employee("Akila",700000,"Dev")
e2.SalaryHike();
