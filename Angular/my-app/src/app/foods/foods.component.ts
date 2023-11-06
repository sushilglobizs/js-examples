import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods!: string[];

  constructor() {}

  ngOnInit(): void {
    this.foods = ['Food 1', 'Food 2', 'Food 3'];
  }

}
