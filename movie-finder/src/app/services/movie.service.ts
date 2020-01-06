import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';


const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IN_THEATERS_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '?api_key=6c7f7b880b4851ca6a746b314d4e8806';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/popular' + API_KEY);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(IN_THEATERS_URL + API_KEY + '&with_release_type=2|3');
  }
}
