import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number[]=[10,20,30,40,50,60]
  public states:string[]=["andhapradesh","telangana","taminadhu"];
  public products:any=[
    {name:"pen",price:20,rating:4},
    {name:"phone",price:20000,rating:2.8},
    {name:"laptop",price:80000,rating:5},
    {name:"tv",price:25000,rating:1.8},
    {name:"glass",price:45,rating:2.8},
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
