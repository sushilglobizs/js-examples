import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books!: string[];

  constructor() {}

  ngOnInit(): void {
    this.books = ['Book 1', 'Book 2', 'Book 3'];
  }

}
