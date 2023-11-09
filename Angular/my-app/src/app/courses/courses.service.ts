import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [{
      courseName: 'B. Tech',
      url: 'btech'
    }, {
      courseName: 'B. Sc.',
      url: 'bsc'
    }];
  }
}
