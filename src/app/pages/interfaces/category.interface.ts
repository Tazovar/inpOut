import { ProductRes } from "./product.interface"

export interface CategoryRes{
    name:string,
    id:number
}

export interface categoryFilterRes{
    id:number
    name:string,
    products:ProductRes[];
}