import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  names!: string[];

  constructor() {}

  ngOnInit() {}

  suggestNames(g: string) {
    if (g === 'M') {
      this.names = ['John', 'Rick', 'Morty'];
    } else if (g === 'F') {
      this.names = ['Rosie', 'Stacy', 'Anna'];
    }
  }

}
