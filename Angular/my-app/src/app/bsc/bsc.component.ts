import { Component, OnInit } from '@angular/core';
import { BscService } from './bsc.service';

@Component({
  selector: 'app-bsc',
  templateUrl: './bsc.component.html',
  styleUrls: ['./bsc.component.css']
})
export class BscComponent implements OnInit {

  departments!: any[];

  constructor(private bscService: BscService) {}

  ngOnInit(): void {
    this.departments = this.bscService.getDepartments();
  }

}
