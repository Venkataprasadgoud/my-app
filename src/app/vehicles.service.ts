 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpClient:HttpClient) { }
  getVehicles():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  } 
  
  getVehicle(id:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }
  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getSortedVehicles(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  getLimitVehicles(limit:number, page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
  }
  deleteVehicle(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }
  updateVehicle(data:any,id:string):Observable<any>{
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data)
  
  } 

  

}