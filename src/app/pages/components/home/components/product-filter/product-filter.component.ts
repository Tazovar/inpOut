import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryRes } from '../../../../interfaces/category.interface';
import { ProductFilterData } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
@Input() categoryArray:Array<CategoryRes> = [];
@Output() filterFormEmitter:EventEmitter<ProductFilterData> = new EventEmitter();
@Output() filterResetEvent:EventEmitter<void> = new EventEmitter();
  public onFilterFormSubmit(myForm:NgForm):void{
    this.filterFormEmitter.emit(myForm.value)
  }


  public resetForm(myForm:NgForm):void{
    Object.keys(myForm.controls)
    .forEach((key) => {
      myForm.controls[key].setValue('')
    })
  }

  public onResetFilterBtnClick(myForm:NgForm):void{
    this.resetForm(myForm)
    this.filterResetEvent.emit()
  }
}
