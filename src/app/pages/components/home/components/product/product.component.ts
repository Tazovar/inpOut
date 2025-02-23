import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductRes } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!:ProductRes
@Output() addToBasketEmitter:EventEmitter<ProductRes> = new EventEmitter();

public onAddToBasketBtnClick(product:ProductRes){
this.addToBasketEmitter.emit(product)
}
}
