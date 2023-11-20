import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero/hero.model';

@Component({
  selector: 'app-hero-edit-form',
  templateUrl: './hero-edit-form.component.html',
  styleUrls: ['./hero-edit-form.component.css']
})
export class HeroEditFormComponent {

  @Input() hero: Hero = {
    name: ''
  };

  formSubmit(form: NgForm) {

  }

}
