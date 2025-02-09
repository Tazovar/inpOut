import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
public isRouteBlocked:boolean = false;




public blockOrUnBlockRoute(){
  this.isRouteBlocked = !this.isRouteBlocked;
}
  
  constructor() { }
}
