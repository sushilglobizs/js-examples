import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!: string[];

  constructor() {}

  ngOnInit(): void {
    this.movies = ['Movie 1', 'Movie 2', 'Movie 3'];
  }
}
