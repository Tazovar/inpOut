import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductRes } from '../../../../interfaces/product.interface';
import { addUpdateBasketData, BasketRes } from '../../../../interfaces/basket.interface';
import { Subject, takeUntil } from 'rxjs';
import { BasketService } from '../../../../services/basket.service';

@Component({
  selector: 'app-one-basket-item',
  templateUrl: './one-basket-item.component.html',
  styleUrl: './one-basket-item.component.css'
})
export class OneBasketItemComponent  {
  constructor(private basketService:BasketService){}
@Input() public oneBasketItem!:BasketRes
@Output() private updateOneBasketItemEmitter:EventEmitter<addUpdateBasketData> = new EventEmitter();
@Output() private deleteOneBasketItemEmitter:EventEmitter<number> = new EventEmitter();
@Input() public disabledBtn:boolean = false;

public onProductUpdateBtnClick(eventName:string):void{
  if(eventName == 'plus'){
    this.oneBasketItem.quantity++;
    this.oneBasketItem.price = this.oneBasketItem.quantity * this.oneBasketItem.product.price
  }
  else if (eventName == 'minus'){
    if(this.oneBasketItem.quantity > 1){
      this.oneBasketItem.quantity--;
      this.oneBasketItem.price = this.oneBasketItem.quantity * this.oneBasketItem.product.price
    }else{
      return;
    }
  }
  let reqBody:addUpdateBasketData = {
    quantity: this.oneBasketItem.quantity,
    price: this.oneBasketItem.price,
    productId: this.oneBasketItem.product.id
  }
  this.updateOneBasketItemEmitter.emit(reqBody)
  }



 public onRemoveProductBtnClick():void{
  this.deleteOneBasketItemEmitter.emit(this.oneBasketItem.product.id)
 }

}
