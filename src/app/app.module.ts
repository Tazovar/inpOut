
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { AuthComponent } from './views/pages/auth/auth.component';
import { LoginComponent } from './views/pages/auth/children/login/login.component';
import { RegisterComponent } from './views/pages/auth/children/register/register.component';
import { CaruselComponent } from './views/pages/home/children/carusel/carusel.component';
import { CardComponent } from './views/pages/about/children/components/card/card.component';
import { CardDetailsComponent } from './views/pages/about/children/pages/card-details/card-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    CaruselComponent,
    CardComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
