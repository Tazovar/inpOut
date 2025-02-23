import { Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryFilterRes, CategoryRes } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private commonService:CommonService,private http:HttpClient) { }


    public getAllCategories():Observable<CategoryRes[]>{
        return this.http.get<CategoryRes[]>(`${this.commonService.getBaseUrl()}/api/Categories/GetAll`)
    }

}
