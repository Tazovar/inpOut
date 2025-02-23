import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { ProductFilterData, ProductRes } from '../../interfaces/product.interface';
import { pipe, Subject, take, takeUntil } from 'rxjs';
import { CategoryRes } from '../../interfaces/category.interface';
import { addUpdateBasketData } from '../../interfaces/basket.interface';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  private unsubscribeSubject$:Subject<void> = new Subject();
  public productsArray:Array<ProductRes> = [];
  public categoryArray:Array<CategoryRes> = [];
constructor(
  private productsService:ProductService,
  private categoryService:CategoryService,
  private basketService:BasketService
  
){}


private getAllProducts():void{
  this.productsService.getAllProducts()
  .pipe(
    takeUntil(this.unsubscribeSubject$)
  )
  .subscribe((res:ProductRes[]) => {
    this.productsArray = res;
    console.log(this.productsArray,'products array');
  })
}

private getAllCategories():void{
  this.categoryService.getAllCategories()
  .pipe(
    takeUntil(this.unsubscribeSubject$)
  )
  .subscribe((res:CategoryRes[]) => {
    this.categoryArray = res;
    console.log(this.categoryArray,'category array');
  })
}


public filterFormEmitterSub(filterData:ProductFilterData):void{
  this.productsService.getFilteredProducts(filterData)
  .pipe(
    takeUntil(this.unsubscribeSubject$)
  ).subscribe((res:ProductRes[]) => {
    this.productsArray = res;
  })
}


public filterResetEventSub():void{
  this.getAllProducts();
}


public addToBasketEmitterSub(product:ProductRes):void{
  let sendData:addUpdateBasketData = {
    quantity:1,
    price:product.price,
    productId:product.id
  }

  this.basketService.AddToBasket(sendData)
  .pipe(
    takeUntil(this.unsubscribeSubject$)
  ).subscribe({
    next:() => {
      alert('პროდუქტი დაემატა კალათში წარმატებით')
    },
    error:() => {
      alert('პრობლემის გამო ვერ მოხერხდა პროდუქტის დამატება კალათში.სცადეთ თავიდან')
    },
  })
}

ngOnDestroy(): void {
  this.unsubscribeSubject$.next();
  this.unsubscribeSubject$.complete();
}

ngOnInit(): void {
  this.getAllProducts();
  this.getAllCategories();
}
}
