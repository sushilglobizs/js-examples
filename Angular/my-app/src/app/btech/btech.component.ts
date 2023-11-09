import { Component, OnInit } from '@angular/core';
import { BtechService } from './btech.service';

@Component({
  selector: 'app-btech',
  templateUrl: './btech.component.html',
  styleUrls: ['./btech.component.css']
})
export class BtechComponent implements OnInit {

  departments!: any[];

  constructor(private btechService: BtechService) {}

  ngOnInit(): void {
    this.departments = this.btechService.getDepartments();
  }

}
