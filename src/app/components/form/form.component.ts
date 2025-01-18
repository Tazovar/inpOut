import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
@Output() formEmitter:EventEmitter<NgForm> = new EventEmitter();
  onFormSubmit(form:NgForm){
    this.formEmitter.emit(form);
    
    
  }
}
