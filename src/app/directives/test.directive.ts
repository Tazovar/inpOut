import { AfterViewInit, Directive, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isAdultD]'
})
export class TestDirective implements OnChanges {
@Input() isAdultD!:number 

@HostBinding('style.color') myColor:string = 'black';

ngOnChanges(changes: SimpleChanges): void {
  if(changes['isAdultD']){
    this.changeMyColor()
  }
}

  constructor() { }

  private changeMyColor(){
    if(this.isAdultD >= 18){
      this.myColor = 'green'
    }else{
      this.myColor = 'red'
    }      
  }

}
