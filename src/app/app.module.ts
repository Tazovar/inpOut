
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/pages/home/home.component';
import { FormComponent } from './views/pages/home/children/form/form.component';
import { CardsComponent } from './views/pages/home/children/cards/cards.component';
import { CardComponent } from './views/pages/home/children/cards/children/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CardsComponent,
    CardComponent,
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
