import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtechService {

  constructor() { }

  getDepartments() {
    return [{
      name: 'CSE'
    }, {
      name: 'ECE'
    }, {
      name: 'Civil'
    }]
  }
}
