import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';
import MovieDetails from '../models/MovieDetails';


const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS_MOVIES = 'discover/movie?primary_release_date.gte=2019-12-10&primary_release_date.lte=2020-01-05';
const KIDS_MOVIES = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const POPULAR_MOVIES = 'discover/movie?sort_by=popularity.desc';
const BEST_DRAMA_MOVIES = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';

const API_KEY = '&api_key=6c7f7b880b4851ca6a746b314d4e8806';
const API_KEY_ALT = '?api_key=6c7f7b880b4851ca6a746b314d4e8806';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get<Movie[]>(BASE_URL + POPULAR_MOVIES + API_KEY);
  }

  getInTheaterMovies() {
    return this.http.get<Movie[]>(BASE_URL + IN_THEATERS_MOVIES + API_KEY);
  }

  getPopularKidsMovies() {
    return this.http.get<Movie[]>(BASE_URL + KIDS_MOVIES + API_KEY);
  }

  getBestDramaMovies() {
    return this.http.get<Movie[]>(BASE_URL + BEST_DRAMA_MOVIES + API_KEY);
  }

  getMovieById(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT);
  }

  searchMovie(query: string) {
    return this.http.get<Movie[]>(BASE_URL + 'search/movie' + API_KEY_ALT + `&query=${query}`);
  }
}
