import { Injectable } from '@angular/core';
import { Hero } from '../hero/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes(): Hero[] {
    return [{
        id: 12,
        name: 'Dr. Strange'
    }, {
        id: 13,
        name: 'Plastic man'
    }, {
      id: 16,
      name: 'Spiderman'
    }];
  }
}
