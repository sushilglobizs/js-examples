import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  popBands!: string[];
  rockBands!: string[];
  hipHopBands!: string[];
  metalBands!: string[];

  activeMusicType!: string;
  selectedBand!: string;

  constructor() {}

  ngOnInit() {
    this.popBands = ['Adele', 'Lady Gaga', 'Taylor Swift', 'One Direction'];
    this.rockBands = ['Pink Floyd', 'AC/DC', 'U2', 'Scorpions'];
    this.hipHopBands = ['Eminem', '50 Cent', 'Snoop Dogg'];
    this.metalBands = ['Metallica', 'Avenged Sevenfold', 'Megadeth', 'Black Sabbath'];
  }

  showBands(musicType: string) {
    // pop | rock | rap | metal
    this.activeMusicType = musicType;
  }

  setBand(band: string) {
    this.selectedBand = band;
  }

}
