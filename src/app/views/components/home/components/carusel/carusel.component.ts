import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../../services/home.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit,OnDestroy{
data$!:Observable<any>
constructor(private homeService:HomeService){}
  ngOnInit(): void {
    this.getCaruselData()
  }

  private getCaruselData():void {
this.data$ = this.homeService.getHomeCarusel()
  }

  ngOnDestroy(): void {}
}
