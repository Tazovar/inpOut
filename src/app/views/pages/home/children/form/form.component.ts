import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() userFormEmitter:EventEmitter<NgForm> = new EventEmitter();

  onFormSubmit(userForm:NgForm){
    this.userFormEmitter.emit(userForm)
  }
}
