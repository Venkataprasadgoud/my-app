import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {
  public createVehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    image:new FormControl(),

  })

  constructor(private _vehiclesService:VehiclesService) { }

  ngOnInit(): void {
  }
  create(){
    this._vehiclesService.createVehicle(this.createVehicleForm.value).subscribe(
      (data:any)=>{
        alert("created successfully")
        this.createVehicleForm.reset()

      },
      (err:any)=>{
        alert("internal server error")
      }
      
      

    )
  }

}
