import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {
  
  public count$:BehaviorSubject<any> = new BehaviorSubject(0)


  constructor(private _SiblingServic:SiblingService) { }
  grtItem(){
    return this.count$;
  }
  setItem(value:any){
    this.count$.next(value);
  }
}
