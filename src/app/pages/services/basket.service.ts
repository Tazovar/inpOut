import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { Observable } from 'rxjs';
import { addUpdateBasketData, BasketRes } from '../interfaces/basket.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
    constructor(private commonService:CommonService,private http:HttpClient) { }

    public GetAllProducts():Observable<BasketRes>{
      return this.http.get<BasketRes>(`${this.commonService.getBaseUrl()}/api/Baskets/GetAll`)
    }

    public updateBasket(updateData:addUpdateBasketData){
      return this.http.put(`${this.commonService.getBaseUrl()}/api/Baskets/UpdateBasket`,updateData)
    }
    public AddToBasket(addData:addUpdateBasketData){
      return this.http.post(`${this.commonService.getBaseUrl()}/api/Baskets/AddToBasket`,addData)
    }
    
    public DeleteFromBasket(productId:number){
      return this.http.delete(`${this.commonService.getBaseUrl()}/api/Baskets/DeleteProduct/${productId}`)
    }
    
}
