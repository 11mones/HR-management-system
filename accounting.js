'use strict';
let Admin =0;
let marketing =0;
let develop =0;
let finance =0;
let adminTotalSalary =0;
let developTotalSalary =0;
let marketingTotalSalary =0;
let financeTotalSalary =0;

    let reterivedArray = localStorage.getItem("name");
    let objArray = JSON.parse(reterivedArray);
    
    console.log(objArray);
    for(let i = 0;i<objArray.length;i++){
if(objArray[i]["dep"] === "Administration"){
    adminTotalSalary+=objArray[i].sal;
Admin++;
} else if(objArray[i]["dep"] === "Development"){
    developTotalSalary+=objArray[i].sal;
    develop++;
}else if(objArray[i]["dep"] === "Marketing"){
    marketingTotalSalary+=objArray[i].sal;
    marketing++;
}else {
    financeTotalSalary+=objArray[i].sal;
    finance++;
}

    }


let c = document.getElementById("table");






let section = document.createElement("section");
section.innerHTML = ` <section>
<table style="width:100% ">
  <tr>
    <th>Department</th>
    <th># of employees</th>
    <th>Average Salary</th>
    <th>Total salary</th>
  </tr>
  <tr>
    <td>Adminstration</td>
    <td>${Admin}</td>
    <td>${adminTotalSalary/Admin}</td>
    <td>${adminTotalSalary}</td>
  </tr>
  <tr>
  <td>Marketing</td>
    <td>${marketing}</td>
    <td>${marketingTotalSalary/marketing}</td>
    <td>${marketingTotalSalary}</td>
  </tr>
  <tr>
  <td>Development</td>
    <td>${develop}</td>
    <td>${developTotalSalary/develop}</td>
    <td>${developTotalSalary}</td>
  </tr>
  <tr>
  <td>Finance</td>
    <td>${finance}</td>
    <td>${financeTotalSalary/finance}</td>
    <td>${financeTotalSalary}</td>
  </tr>
  <tr>
  <th>Total</th>
  <th>${Admin + marketing+develop+finance}</th>
  <th>${(adminTotalSalary/Admin)+(marketingTotalSalary/marketing) +(developTotalSalary/develop) +(financeTotalSalary/finance) }</th>
  <th>${(adminTotalSalary)+(marketingTotalSalary)+(developTotalSalary) +(financeTotalSalary) }</th>
</tr>
</table>


</section>`;
c.appendChild(section);


   


    console.log(Admin , marketing, develop, finance);



// console.log(localStorage);