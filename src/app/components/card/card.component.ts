import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() card:any
@Input() index:any
@Output() cardIdEmitter = new EventEmitter();
@Output() cardDeleteIdEmitter = new EventEmitter();
onChangeStatusBtnClick(id:number){
   this.cardIdEmitter.emit(id)
}

onDeleteBtnClick(id:number){
this.cardDeleteIdEmitter.emit(id)
}
}
