import { ProductRes } from "./product.interface";

export interface BasketRes{
    quantity:number,
    price:number
    product:ProductRes[];
}

export interface addUpdateBasketData{
    quantity:number,
    price:number,
    productId:number
}