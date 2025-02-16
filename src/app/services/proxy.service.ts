import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  array:Array<any> = [];

  constructor(private http:HttpClient) { }


  public getProducts():Observable<any>{
    return this.http.get(`https://fakestoreapi.com/products`)
  }

  public addNewProduct(data:any):Observable<any>{
    return this.http.post(`https://fakestoreapi.com/products`,data,{})
  }
  public deleteProduct(id:number):Observable<any>{
    return this.http.delete(`https://fakestoreapi.com/products/${id}`)
  }
  
  public updateProduct(id:number,data:any):Observable<any>{
    return this.http.put(`https://fakestoreapi.com/products/${id}`,data)
  }

}
