
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './views/components/home/home.component';
import { CaruselComponent } from './views/components/home/components/carusel/carusel.component';
import { MoviesComponent } from './views/components/home/components/movies/movies.component';
import { MovieComponent } from './views/components/home/components/movies/components/movie/movie.component';
import { StringConverterPipe } from './views/pipes/string-converter.pipe';
import { ConverToNumberPipe } from './views/pipes/conver-to-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CaruselComponent,
    MoviesComponent,
    MovieComponent,
    StringConverterPipe,
    ConverToNumberPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
