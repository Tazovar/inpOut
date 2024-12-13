import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) { }
  public baseUrl:string = 'https://cavea.plus/api/v1';

  public getHeaderMenu():Observable<any>{
    return this.http.get(`${this.baseUrl}/menus/main-menu?lang=ka`)
  }
}
