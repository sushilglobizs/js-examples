import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getPlayers(): Player[] {
    return [
      {
        id: 1,
        teamId: 1,
        name: 'Rohit Sharma',
      },
      {
        id: 2,
        teamId: 1,
        name: 'Virat Kohli',
      },
      {
        id: 3,
        teamId: 1,
        name: 'Shubman Gill',
      },
      {
        id: 4,
        teamId: 2,
        name: 'Travis Head',
      },
      {
        id: 5,
        teamId: 2,
        name: 'Cummins',
      },
      {
        id: 6,
        teamId: 2,
        name: 'Starc',
      },
      {
        id: 7,
        teamId: 3,
        name: 'Chris Cairns',
      },
      {
        id: 8,
        teamId: 3,
        name: 'Daniel Vettori',
      },
      {
        id: 9,
        teamId: 3,
        name: 'Shane Bond',
      },
      {
        id: 10,
        teamId: 4,
        name: 'Klaansen',
      },
      {
        id: 11,
        teamId: 4,
        name: 'Maharaja',
      },
      {
        id: 12,
        teamId: 4,
        name: 'Temba',
      },
    ];
  }
}
