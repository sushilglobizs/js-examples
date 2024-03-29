import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero.model';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes!: Hero[];
  tempHero: Hero = {
    name: ''
  };

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  heroClicked(hero: Hero) {
    this.tempHero = hero;
  }

}
