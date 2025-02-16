import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProxyService } from '../../services/proxy.service';
import { CommonService } from '../../services/common.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-new-card-form',
  templateUrl: './add-new-card-form.component.html',
  styleUrl: './add-new-card-form.component.css'
})
export class AddNewCardFormComponent implements AfterViewInit,OnDestroy {
  isUpdateResponse:boolean = false
  updateProductId!:number
    unsubscribeSubject:Subject<void> = new Subject();
  @ViewChild('productForm',{static:true}) productForm!:NgForm
  constructor(private proxyService:ProxyService,private commonService:CommonService){}
  public onSubmit(productForm:NgForm){

    if(!this.isUpdateResponse){
      this.proxyService.addNewProduct(productForm.value)
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((res) => {
        this.proxyService.array.push(res)
      },(error:any) => {
        console.error(error)
      })
    }else{
      this.proxyService.updateProduct(this.updateProductId,productForm.value)
      .pipe(
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe((res) => {
        this.proxyService.array = this.proxyService.array.map((item) => {
          if(item.id == res.id){
            return res
          }
          return item
        })

        this.isUpdateResponse = false;
        this.updateProductId = -1;
        this.productForm.resetForm()
      },(err) => {
        console.error(err)
      })
    }
  }


  ngAfterViewInit(): void {
    this.commonService.updateDataEmitter
    .subscribe((res) => {
      this.productForm.form.patchValue(res)
      if(res){
        this.isUpdateResponse = true;
        this.updateProductId = res.id
      }
    })
  }

   ngOnDestroy(): void {
     this.unsubscribeSubject.next();
     this.unsubscribeSubject.complete();
   }
}
