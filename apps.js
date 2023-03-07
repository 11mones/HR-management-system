
'use strict';

const allEmploeeys = [];
function Employee (ID ,
     fullName ,
      department ,
       level,
        url , 
        salary){

this.id = ID;
this.name = fullName;
this.dep = department;
this.lev = level;
this.image = url;
this.sal = salary;
let rjSal = Math.floor(Math.random() * (1000 - 500) ) + 500;
let rmsSal = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
let rsSal = Math.floor(Math.random() * (2000 - 1500) ) + 1500;


//here i will assume that the net salary equation is (salary * tax -255)

if(this.lev  = "Senior"){
    this.sal = rsSal * 7.5 - 255 ;
    
}
else if(this.lev  = "Mid-Senior"){
    this.sal = rmsSal * 7.5 - 255 ;
}
else if (this. lev  = "Junior"){
    this.sal  = rjSal * 7.5 - 255 ;

}
allEmploeeys.push(this);



}

Employee.prototype.render = function(){
   document.write(`<h1 style = "color : black">Name of the employee is :  ${this.name} 
   and his salary is : ${this.sal}</h1> `);

    }

// var jSal = Math.floor(Math.random() * (1000 - 500) ) + 500;
// var mSSal = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
// var sSal = Math.floor(Math.random() * (2000 - 1500) ) + 1500;





let emp = new Employee("1000" , "Ghazi samer", "Administration" , "Senior" );
let emp1 = new Employee("1001" , "Lana Ali", "Finance" , "Senior" );
let emp2 = new Employee("1002" , "Tamara Ayoub", "Marketing" , "Senior" );
let emp3 = new Employee("1003" , "Safi Walid", "Administration" , "Mid-Senior" );
let emp4 = new Employee("1004" , "Omar Zaid", "Development" , "Senior" );
let emp5 = new Employee("1005" , "Rana Saleh", "Development" , "Junior" );
let emp6 = new Employee("1006" , "Hadi Ahmad", "Finance" , "Mid-Senior" );
//  console.log(emp);
//  console.log(emp2);
//  console.log(emp1);
//  console.log(emp3);
//  console.log(emp4);
//  console.log(allEmploeeys);
emp.render();
emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
 