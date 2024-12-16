import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private authService:AuthService){}
onFormSubmit(form:NgForm){
this.authService.sendPasswordResetRequest(form.value)
.subscribe((res) => {
  console.log(res);
})
}
}
