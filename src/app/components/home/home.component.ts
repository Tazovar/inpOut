import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
array:Array<any> = [];

  formEmitterSub(event:NgForm){

    let id = Math.ceil(Math.random() * 1000000);

for(let elemnt of this.array){
  while(elemnt.id == id){
    id = Math.ceil(Math.random() * 1000);
  }
}

event.controls['id'].setValue(id);
    this.array.push(event.value);
    console.log(this.array);
    
  }


  newArrayEmitterSub(event:any){
this.array = event;
  }
}
