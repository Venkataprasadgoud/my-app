import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
    public vehicles: any = [];
    public term: string = "";
    public column: string = "";
    public order: string = "";
    public limit: number = 0;
    public pageNo: number = 0;

    constructor(private _vehiclesService: VehiclesService) {
        _vehiclesService.getVehicles().subscribe(
            (data: any) => {
                this.vehicles = data;
            },
            (err: any) => {
                alert("Internal Server Error");
            }
        )
    }

    ngOnInit(): void {
    }
    filter(){
        this._vehiclesService.getFilteredVehicles(this.term).subscribe(
            (data:any) =>{
                this.vehicles = data;
            },
            (err:any) =>{
                alert("Internal Server Error");
            }
        )
    }
    sort(){
        this._vehiclesService.getSortedVehicles(this.column,this.order).subscribe(
            (data:any) =>{
                this.vehicles = data;
            },
            (err:any) =>{
                alert("Internal Server Error");
            } 
        )
    }
    page(){
        this._vehiclesService.getLimitVehicles(this.limit,this.pageNo).subscribe(
            (data:any) =>{
                this.vehicles = data;
            },
            (err:any) =>{
                alert("Internal Server Error");
            } 
        );

    }
    delete(id:string){
        this._vehiclesService.deleteVehicle(id).subscribe(
            (data:any) =>{
                alert("deleted successfully");
                location.reload();
            },
            (err:any) =>{
                alert("deletion failed");
            } 
        )
    }

}