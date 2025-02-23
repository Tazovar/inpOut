import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';
import { ProductFilterData, ProductRes } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private commonService:CommonService,private http:HttpClient) { }




  public getAllProducts():Observable<ProductRes[]>{
    return this.http.get<ProductRes[]>(`${this.commonService.getBaseUrl()}/api/Products/GetAll`)
  }


  public getFilteredProducts(filterData:ProductFilterData):Observable<ProductRes[]>{
    let queryArray:string[] = [];
    if(filterData.categoryId){
      queryArray.push(`categoryId=${filterData.categoryId}`)
    }
    if(filterData.nuts){
      queryArray.push(`nuts=${filterData.nuts}`)
    }
    if(filterData.spiciness){
      queryArray.push(`spiciness=${filterData.spiciness}`)
    }
    if(filterData.vegeterian){
      queryArray.push(`vegeterian=${filterData.vegeterian}`)
    }
    
    let sendQuery:string = `${queryArray.length > 0 ? '?' : ''}${queryArray.join('&')}`
    return this.http.get<ProductRes[]>(`${this.commonService.getBaseUrl()}/api/Products/GetFiltered${sendQuery}`)
  }
}
