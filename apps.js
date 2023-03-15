
'use strict';
let c = document.getElementById("card-container");
let f = document.getElementById("form");

let allEmploeeys = [];
let rjSal = Math.floor(Math.random() * (1000 - 500) ) + 500;
let rmsSal = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
let rsSal = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
function Employee (ID ,
     fullName ,
      department ,
       level,
       url , 
        salary){

this.id = uniqeId();
this.name = fullName;
this.dep = department;
this.lev = level;
this.image = url;
this.sal = this.netSalary();


allEmploeeys.push(this);


        }


Employee.prototype.render = function(){
 
//    document.write(`<h1 style = "color : black">Name of the employee is :  ${this.name} 
//    and his salary is : ${this.sal}</h1> `);
let div = document.createElement("div");
div.innerHTML = ` <div class = "card">
<img src = ${this.image}>

<p>Name : ${this.name} - ID ${this.id} <br>Department ${this.dep} -Level ${this.lev} <br> ${this.sal}</p>
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
 Employee.prototype.random= function (){
    if(this.lev == "Senior"){
        return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        
    }
    else if(this.lev  == "Mid-Senior"){
        return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    }
    else if (this. lev  == "Junior"){
        return Math.floor(Math.random() * (1000 - 500) ) + 500;
    
    }
    
    }
    Employee.prototype.netSalary= function(){
        return (this.random() - this.random()*0.075);
    }
    

 function uniqeId (){
   return Math.floor(Math.random() * (9999 - 1000) ) + 1000;
}



let emp = new Employee("1000" , "Ghazi samer", "Administration" , "Senior" , "./assets/Ghazi.jpg");
let emp1 = new Employee("1001" , "Lana Ali", "Finance" , "Senior","./assets/Lana.jpg" );
let emp2 = new Employee("1002" , "Tamara Ayoub", "Marketing" , "Senior" , "./assets/Tamara.jpg");
let emp3 = new Employee("1003" , "Safi Walid", "Administration" , "Mid-Senior" , "./assets/Safi.jpg");
let emp4 = new Employee("1004" , "Omar Zaid", "Development" , "Senior", "./assets/Omar.jpg" );
let emp5 = new Employee("1005" , "Rana Saleh", "Development" , "Junior", "./assets/Rana.jpg" );
let emp6 = new Employee("1006" , "Hadi Ahmad", "Finance" , "Mid-Senior", "./assets/Hadi.jpg" );
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

f.addEventListener("submit" , eventHandler);
function  eventHandler(event){
event.preventDefault();
let namee = (event.target.fname.value);
let departmentt = (event.target.depart.value);
let levell = (event.target.lev.value);
let imageUrl = (event.target.img.value);
console.log(namee , departmentt, levell , imageUrl);
let empForm = new Employee("0000" , namee , departmentt , levell , imageUrl);
// allEmploeeys.push(empForm);

empForm.render();
saveData(allEmploeeys);

}

   


function saveData(data){
    let stringArray = JSON.stringify(data);
localStorage.setItem("name" , stringArray);

}
function getData (){
let reterivedArray = localStorage.getItem("name");
let objArray = JSON.parse(reterivedArray);

if(objArray!== null){
    allEmploeeys = [];
for(let i =0;i<objArray.length;i++){
   console.log(objArray[i]); 
 new Employee(uniqeId(),objArray[i].name,objArray[i].dep,objArray[i].lev,objArray[i].image);

 }
}
}

getData(); 
for(let i =0;i<allEmploeeys.length;i++){
    console.log(allEmploeeys[i]);
allEmploeeys[i].render();
}


