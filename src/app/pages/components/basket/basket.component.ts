import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { Subject, takeUntil } from 'rxjs';
import { addUpdateBasketData, BasketRes } from '../../interfaces/basket.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit,OnDestroy{
private unsubscribeSubject:Subject<void> = new Subject()
public totalPrice:number = 0
public disabledBtn:boolean = false

constructor(private basketService:BasketService){}
basketsArray:Array<BasketRes> = [];
ngOnDestroy(): void {
  this.unsubscribeSubject.next();
  this.unsubscribeSubject.complete();
}


private setTotalPrice():void{
let totalPrice = 0;
    for(let item of this.basketsArray){
      totalPrice += item.price 
    }


    this.totalPrice = totalPrice
    
}

private getAllProducts():void{
  this.basketService.GetAllProducts()
  .pipe(
    takeUntil(this.unsubscribeSubject)
  ).subscribe((response) => {
    this.basketsArray = response;
    this.setTotalPrice()

  })
}


ngOnInit(): void {
  this.getAllProducts();

}

public updateOneBasketItemEmitterSub(reqBody:addUpdateBasketData):void{
  this.disabledBtn = true;
   this.basketService.updateBasket(reqBody)
  .pipe(
    takeUntil(this.unsubscribeSubject)
  ).subscribe((res) => {
      this.getAllProducts();
      this.disabledBtn = false;
  })
}

public deleteOneBasketItemEmitterSub(productId:number):void{
  this.disabledBtn = true
  this.basketService.DeleteFromBasket(productId)
  .pipe(
    takeUntil(this.unsubscribeSubject)
  ).subscribe((res) => {
      this.getAllProducts();
      this.disabledBtn = false
  })
}
}
