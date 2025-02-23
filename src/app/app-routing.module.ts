import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { BasketComponent } from './pages/components/basket/basket.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'basket',component:BasketComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }