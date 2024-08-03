import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-itams',
  templateUrl: './sibling-itams.component.html',
  styleUrls: ['./sibling-itams.component.css']
})
export class SiblingItamsComponent implements OnInit {
  public count:any = 0;

  constructor(public _siblingService:SiblingService) { }

  ngOnInit(): void {
  }
  addcart(){
    this. _siblingService.setItem(this.count++)

  }

}
