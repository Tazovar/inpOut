import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { AuthComponent } from './views/pages/auth/auth.component';
import { LoginComponent } from './views/pages/auth/children/login/login.component';
import { RegisterComponent } from './views/pages/auth/children/register/register.component';
import { CardDetailsComponent } from './views/pages/about/children/pages/card-details/card-details.component';
import { CanActivateGuard } from './views/guards/can-activate.guard';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent,canActivate:[CanActivateGuard]},
  {path:'about/:id', component:CardDetailsComponent},
  {path:'auth',component:AuthComponent,
    children:[
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
