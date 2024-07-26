import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-data',
  templateUrl: './employees-data.component.html',
  styleUrls: ['./employees-data.component.css']
})
export class EmployeesDataComponent implements OnInit {
  public newEmployee={
    emp_id:0,
    emp_name:'',
    role:'',
    j_date:'',
    phoneno:0,
    email:'',
    dob:'',
    gender:'',
    address:''

  }
  public employees:any[]=[
    {emp_id:4541,emp_name:'venkat',role:'ui developer',j_date:new Date('08-30-2012'),phoneno:99876676552,email:'v@gmail.com',dob:new Date('07-23-1997'),gender:'male',address:'D.No345 kphb hyd',},
    {emp_id:4542,emp_name:'durgesh',role:'ui developer',j_date:new Date('08-28-2012'),phoneno:99876672655,email:'d@gmail.com',dob:new Date('07-23-1995'),gender:'male',address:'D.No341 kphb hyd',},
    {emp_id:4543,emp_name:'ramu',role:'ui developer',j_date:new Date('08-27-2012'),phoneno:99876673655,email:'b@gmail.com',dob:new Date('07-23-1994'),gender:'male',address:'D.No342 jphb hyd',},
    {emp_id:4544,emp_name:'balu',role:'ui developer',j_date:new Date('08-26-2012'),phoneno:99876673655,email:'d@gmail.com',dob:new Date('07-23-1993'),gender:'male',address:'D.No343 nphb hyd',},
    {emp_id:4545,emp_name:'raju',role:'ui developer',j_date:new Date('08-25-2012'),phoneno:99876673655,email:'m@gmail.com',dob:new Date('07-23-1992'),gender:'male',address:'D.No344 rphb hyd',},
    {emp_id:4546,emp_name:'uday',role:'ui developer',j_date:new Date('08-24-2012'),phoneno:99876673655,email:'k@gmail.com',dob:new Date('07-23-1990'),gender:'male',address:'D.No346 lphb hyd',}
    
  ]
  

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    this.employees.push({...this.newEmployee});
    this.newEmployee = {
    emp_id:0,
    emp_name:'',
    role:'',
    j_date:'',
    phoneno:0,
    email:'',
    dob:'',
    gender:'',
    address:''

    }
  }
  delete(i:number){
    this.employees.splice(i,1)
  }

}
