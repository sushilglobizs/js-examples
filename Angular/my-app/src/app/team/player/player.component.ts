import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { Player } from './player.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() team!: Team;

  players!: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.filterPlayers();
  }

  filterPlayers() {
    /* this.players = this.playerService.getPlayers().filter(p => {
      if (p.teamId === this.team.id) {
        return p;
      } else {
        return;
      }
    }); */

    this.players = this.playerService.getPlayers().filter(p => p.teamId === this.team.id);
  }

}
