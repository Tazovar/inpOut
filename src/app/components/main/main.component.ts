import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public text:string = 'დაბლოკვა'
constructor(private commonService:CommonService){};

  onBlockOrUnBlockRouteBtnClick(){
    this.commonService.blockOrUnBlockRoute();
    if(this.commonService.isRouteBlocked){
this.text = 'განბლოკვა'
    }else{
      this.text = 'დაბლოკვა'
    }
  }
}
