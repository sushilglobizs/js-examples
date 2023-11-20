import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  @Input() hero!: Hero;
  @Output() heroEmitter = new EventEmitter<Hero>();

  heroClicked() {
    this.heroEmitter.emit(this.hero);
  }

}
