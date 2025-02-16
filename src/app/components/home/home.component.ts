import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProxyService } from '../../services/proxy.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {
  unsubscribeSubject:Subject<void> = new Subject();
  constructor(private proxyService:ProxyService){}



  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  getArray(){
    return this.proxyService.array
  }
  ngOnInit(): void {
    this.getAllProducts();
  }



  private getAllProducts():void{
    this.proxyService.getProducts()
    .pipe(
      takeUntil(this.unsubscribeSubject)
    )
    .subscribe((res) => {
      this.proxyService.array = res;
      console.log(this.getArray());
    })
  }
}
