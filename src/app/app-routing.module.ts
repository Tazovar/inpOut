import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { ForgetPasswordComponent } from './views/components/forget-password/forget-password.component';
import { TestFormComponent } from './views/components/test-form/test-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'test-form',component:TestFormComponent},
  {path:'forget-password',component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }