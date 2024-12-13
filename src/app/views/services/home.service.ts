import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient,private commonService:CommonService) { }
  public getHomeCarusel():Observable<any>{
return this.http.get(`${this.commonService.baseUrl}/sliders/main-slider?lang=ka`)
  }
  public getHomeMovies(offset:number):Observable<any>{
return this.http.get(`${this.commonService.baseUrl}/blocks?lang=ka&offset=${offset}&limit=3`)
  }

  public testMethod(){
  //   const params:any = new HttpParams({
  //     fromString: 'orderBy="$key"&limitToFirst=1',
  //     fromObject:{
  //       name:"asd"
  //     }
  // });
    // this.http.post('url',{},{headers:{
    //   params:params
    // }})
    // this.http.patch('',{},{
    //   headers:{
        
    //   },
    // })
    // this.http.put('url',{},{headers:{}})
    // this.http.patch('url',{},{headers:{}})
    // this.http.delete('url',{
    // headers:{}
    //   })
  }
}
