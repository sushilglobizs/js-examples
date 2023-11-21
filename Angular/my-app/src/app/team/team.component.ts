import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams!: Team[];
  selectedTeam!: Team;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }

  setTeam(team: Team) {
    this.selectedTeam = team;
  }

}
