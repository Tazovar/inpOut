import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService:CommonService,private http:HttpClient) { }

  sendPasswordResetRequest(data:any):Observable<any>{
    return this.http.post(`${this.commonService.baseUrl}/auth/password/reset`,data)
  }
}
