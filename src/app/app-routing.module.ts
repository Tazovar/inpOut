import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/components/login/login.component';
import { RegisterComponent } from './components/auth/components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }