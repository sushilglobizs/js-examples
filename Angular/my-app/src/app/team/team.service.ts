import { Injectable } from '@angular/core';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeams(): Team[] {
    return [{
      id: 1,
      name: 'India'
    }, {
      id: 2,
      name: 'Australia'
    }, {
      id: 3,
      name: 'New Zealand'
    }, {
      id: 4,
      name: 'South Africa'
    }];
  }
}
