import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies() {
    return ['Pathaan', 'Iron Man', 'Antz', 'Jawaan', 'Tejaz'];
  }

}
