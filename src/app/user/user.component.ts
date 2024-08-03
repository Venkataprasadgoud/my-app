import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userfrom:FormGroup =new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]), 
    age: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(100)]),
    phone: new FormControl(null,[Validators.required,Validators.min(10000000),Validators.max(99999999)]), 
    email: new FormControl(null,[Validators.required,Validators.email]), 
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(), 
    }),
    type: new FormControl(),
    // busfee: new FormControl(),
    // hostelfee: new FormControl()
    cards:new FormArray([])


  })
  get cardsFormArray(){
    return this.userfrom.get('cards') as FormArray
  }
  addcards(){
    this.cardsFormArray.push(
      new FormGroup({
        Number:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl(),

      })
    )
  }

  constructor() {
   this.userfrom.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      
    }
     )
   }

  ngOnInit(): void {
  }
  submit(){
    
  }

}
