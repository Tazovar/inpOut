import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
@Input() array:Array<any> = []


cardIndexEmitterSub(event:number){
  let findElement = this.array.find((e) => {
    return e.id == event;
  })

  if(findElement){
    findElement.status = findElement.status == 'active'? 'noactive' : 'active';
  }
}

cardDeleteIdEmitterSub(event:number){
  let findElementIndex = this.array.findIndex((e) => {
    return e.id == event;
  })

  if(findElementIndex > -1){
    this.array.splice(findElementIndex, 1);
  }
}
}
