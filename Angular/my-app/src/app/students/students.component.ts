import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student = {
    stuName: '',
    rollNo: 0,
    email: '',
    panCard: ''
  };

  constructor() {}

  ngOnInit() {
  }

  formSubmit(studentForm: NgForm) {
    console.log(studentForm);
  }

}
