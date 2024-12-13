import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  constructor(private commonService:CommonService){}
  menuArray:Array<any> = [];
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.getMenu()
  }


  private getMenu():void{
   this.commonService.getHeaderMenu()
   .subscribe((response) => {
    this.menuArray = response.items
    
   })
  }
}
