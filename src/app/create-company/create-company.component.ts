import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  public companyForm: FormGroup = new FormGroup({
    name: new FormControl(),
    founded: new FormControl(),
    ceo: new FormControl(),
    
    location: new FormGroup({
      address: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl(),
      country: new FormControl(),
    }),
    departments: new FormArray([]),
    companyType : new FormControl(),
    type: new FormControl()
  })
  get departmentsFormArray() {
    return this.companyForm.get('departments') as FormArray
  }
  adddepartments() {
    this.departmentsFormArray.push(
      new FormGroup({
        name: new FormControl(),
        head: new FormControl(),
        employees: new FormControl(),
        budget: new FormControl(),
      })
    )
  }

  deleteCard(i: number) {
    this.departmentsFormArray.removeAt(i);
  }

  constructor() {
    this.companyForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'service') {

          this.companyForm.addControl('clientName', new FormControl());
          this.companyForm.removeControl('productName');
        }
        else if (data == 'product') {


          this.companyForm.addControl('productName', new FormControl());
          this.companyForm.removeControl('clientName');
        }

      }
    )
  }


  ngOnInit(): void {
  }
  submit() {
    this.companyForm.markAllAsTouched();
    console.log(this.companyForm)
  }


}