import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  poularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  singleMovie: Movie;
  message: null;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.poularMovies = data['results'].slice(0, 6);
      this.singleMovie = this.poularMovies[0];
    });

    this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(0, 6);
    })
  }

  fromChild(event) {
    console.log(event);
    this.message = event;
  }
}
