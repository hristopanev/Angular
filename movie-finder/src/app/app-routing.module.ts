import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie-resolve';
import { MoviesComponent } from './movies/movies.component';


const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: MovieComponent },
  { path: 'movies/search', component: MoviesComponent },
  { path: 'movies/:id', 
  component: MovieDetailsComponent, 
  resolve: { singleMovie: SingleMovieResolver 
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
