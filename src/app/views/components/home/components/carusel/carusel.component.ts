import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../../services/home.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit,OnDestroy{
caruselArray:Array<any> = [];
unsubscribeSubject$:Subject<boolean> = new Subject()
constructor(private homeService:HomeService){}
  ngOnInit(): void {
    this.getCaruselData()
  }

  private getCaruselData():void {
this.homeService.getHomeCarusel()
.pipe(
  takeUntil(this.unsubscribeSubject$)
)
.subscribe((response) => {
  this.caruselArray = response.slides
console.log(response);

})
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject$.next(true);
    this.unsubscribeSubject$.unsubscribe();
  }
}
