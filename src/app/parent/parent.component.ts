import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public ap:string ="";
  public bp:string ="xxxx";

  catch(value:any){
    this.bp = value 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
