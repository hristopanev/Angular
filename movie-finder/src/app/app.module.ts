import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie-resolve';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { RegisterComponent } from './register/register.component';
import { ImageUrlVDirective } from './image-url-v.directive';
import { RegisterFormReactiveComponent } from './register-form-reactive/register-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    MovieComponent,
    FooterComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    RegisterComponent,
    ImageUrlVDirective,
    RegisterFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SingleMovieResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
