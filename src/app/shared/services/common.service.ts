import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiBaseUrl:string = 'https://restaurant.stepprojects.ge'



  public getBaseUrl():string{
    return this.apiBaseUrl;
  }

  constructor() { }
}
