import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  poularMovies: Movie[];
  inTheaterMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.poularMovies = data['results'].slice(0, 6);
    });

    this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(0, 6);
    })

    this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data['results'].slice(0,6);
    })

    this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data['results'].slice(0,6);
    })
  }
}
