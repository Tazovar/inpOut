import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../../services/home.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit,OnDestroy {
  // testObject = {
  //   name:"asf",
  //   lastname:"asfasf",
  //   asf:"asf",
  //   asfasfasf:"asfasf",
  //   aasfsf:"asf",
  //   aadbssfsf:"asfasf",
  //   asfasf:"asf",
  //   afs:"asfasf",
  //   asasff:"asf",
  //   af:"asfasf",
  //   nasfaame:"asf",
  //   lastnasgaame:"asfasf",
  //   namesasg:"asf",
  //   lastnasafasme:"asfasf",
  // }
  moviesArray:Array<any> = [];
  unsubscribeSubject$:Subject<boolean> = new Subject();
  constructor(private homeService:HomeService){}
  ngOnInit(): void {
    this.getAllMovies()
  }


  private getAllMovies():void{
    for(let i = 0; i <= 18;i+=3){
      this.homeService.getHomeMovies(i)
      .pipe(
        takeUntil(this.unsubscribeSubject$)
      )
      .subscribe((response) => {
        this.moviesArray.push(response.items);
        
      })
    }
  }
ngOnDestroy(): void {
  this.unsubscribeSubject$.next(true)
  this.unsubscribeSubject$.unsubscribe();
}
}
