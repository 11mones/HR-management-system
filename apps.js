
'use strict';
let c = document.getElementById("card-container");

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

allEmploeeys.push(this);


        }

Employee.prototype.render = function(){
//    document.write(`<h1 style = "color : black">Name of the employee is :  ${this.name} 
//    and his salary is : ${this.sal}</h1> `);
let div = document.createElement("div");
div.innerHTML = ` <div class = "card">
<img src = ${this.image}>
<p>Name : ${this.name} - ID ${this.id} - Department ${this.dep} -Level ${this.lev} 
</div>`;
c.appendChild(div);

    }





//     <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4> 
//     <p>Architect & Engineer</p> 
//   </div>
// </div>

// var jSal = Math.floor(Math.random() * (1000 - 500) ) + 500;
// var mSSal = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
// var sSal = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
 Employee.prototype.netSalary = function (level){
    if(this.lev  = "Senior"){
        this.sal = rsSal -(rsSal * 0.075) ;
        
    }
    else if(this.lev  = "Mid-Senior"){
        this.sal = rmsSal -(rmsSal * 0.075) ;
    }
    else if (this. lev  = "Junior"){
        this.sal  = rjSal -(rjSal * 0.075) ;
    
    }
    allEmploeeys.push(this);
    
    
    
    }
Employee.prototype.uniqeId = function(){
    this.id= Math.floor(Math.random() * (9999 - 1000) ) + 1000;
}



let emp = new Employee("1000" , "Ghazi samer", "Administration" , "Senior" , ".assets/Ghazi.jpg");
let emp1 = new Employee("1001" , "Lana Ali", "Finance" , "Senior",".assets/Ghazi.jpg" );
let emp2 = new Employee("1002" , "Tamara Ayoub", "Marketing" , "Senior" , ".assets/Ghazi.jpg");
let emp3 = new Employee("1003" , "Safi Walid", "Administration" , "Mid-Senior" , ".assets/Ghazi.jpg");
let emp4 = new Employee("1004" , "Omar Zaid", "Development" , "Senior", ".assets/Ghazi.jpg" );
let emp5 = new Employee("1005" , "Rana Saleh", "Development" , "Junior", ".assets/Ghazi.jpg" );
let emp6 = new Employee("1006" , "Hadi Ahmad", "Finance" , "Mid-Senior", ".assets/Ghazi.jpg" );
//  console.log(emp);
//  console.log(emp2);
//  console.log(emp1);
//  console.log(emp3);
//  console.log(emp4);
//  console.log(allEmploeeys);
// emp.render();
// emp1.render();
// emp2.render();
// emp3.render();
// emp4.render();
// emp5.render();
// emp6.render();


 for(let i =0;i<=allEmploeeys.length;i++){
allEmploeeys[i].render();

 }



