import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BscService {

  constructor() { }

  getDepartments() {
    return [{
      name: 'Maths'
    }, {
      name: 'Statistics'
    }, {
      name: 'General Line'
    }];
  }
}
