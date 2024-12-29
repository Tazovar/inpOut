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
    this.array.push(event.value);
  }
}
