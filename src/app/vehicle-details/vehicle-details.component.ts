import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  public vehicle:any ={};


  constructor(private _activatedRoute:ActivatedRoute,private _vehicleService:VehiclesService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          },
          (err:any)=>{
            alert("internally server error")
          }
        )
      }
    )
    
  }

  ngOnInit(): void {
  }

}
