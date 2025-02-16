import { Component, Input } from '@angular/core';
import { ProxyService } from '../../services/proxy.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() card:any

constructor(private proxy:ProxyService,private commonService:CommonService){}
public onDeleteBtnClick(id:number){
this.proxy.deleteProduct(id)
.subscribe((res) => {
  this.proxy.array = this.proxy.array.filter((item) => {
    return item.id != id
  })
},(err) => {
  console.error(err)
})

}

public onUpdateBtnClick(card:any){
  this.commonService.updateDataEmitter.emit(card)
}
}
