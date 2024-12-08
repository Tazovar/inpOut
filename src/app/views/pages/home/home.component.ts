import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
usersArray:Array<any> = [];


constructor(){
  
}
userFormEmitterSubscriber(userForm:NgForm){
this.usersArray.push(userForm.value)
}
}
