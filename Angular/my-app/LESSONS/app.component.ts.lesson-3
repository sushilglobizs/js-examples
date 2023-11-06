import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedType!: string;

  favBooks!: string[];
  favMovies!: string[];
  favFoods!: string[];

  constructor() {}

  ngOnInit() {
    this.favBooks = ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5', ];
    this.favMovies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', ];
    this.favFoods = ['Food 1', 'Food 2', 'Food 3', 'Food 4', 'Food 5', ];
  }

  choseList(type: string) {
    this.selectedType = type;
  }

}
